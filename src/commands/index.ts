import * as vscode from 'vscode';
import { PlaywrightCodeLensProvider } from '../codeLensProvider';
import { parseTests } from '../testParser';
import { codeGen } from './codeGen';
import { debugInspectFile, debugInspectTest } from './debugInspectTest';
import { debugFile, debugTest } from './debugTest';
import { inspectFile, inspectTest } from './inspectTest';
import { runFile, runTest } from './runTest';
import { showReport } from './showReport';
import { showTrace } from './showTrace';

async function getActiveFile(): Promise<string | undefined> {
  const editor = vscode.window.activeTextEditor;
  if (editor?.document.uri.scheme === 'file') {
    return editor.document.uri.fsPath;
  }

  await vscode.window.showErrorMessage('Open a Playwright test file first.');
  return undefined;
}

async function resolveFileTarget(file: unknown): Promise<string | undefined> {
  if (typeof file === 'string' && file) {
    return file;
  }

  return getActiveFile();
}

async function resolveTestTarget(
  file: unknown,
  name: unknown
): Promise<{ file: string; name?: string } | undefined> {
  const resolvedFile = await resolveFileTarget(file);
  if (!resolvedFile) {
    return undefined;
  }

  if (typeof name === 'string' && name) {
    return { file: resolvedFile, name };
  }

  const document = await vscode.workspace.openTextDocument(resolvedFile);
  const tests = parseTests(document).filter((item) => item.kind === 'test');
  if (tests.length === 0) {
    await vscode.window.showErrorMessage('No Playwright tests were found in the current file.');
    return undefined;
  }

  const picked = await vscode.window.showQuickPick(
    tests.map((test) => ({
      label: test.name,
      description: `Line ${test.line + 1}`,
    })),
    { placeHolder: 'Select a Playwright test' }
  );

  if (!picked) {
    return undefined;
  }

  return { file: resolvedFile, name: picked.label };
}

export function registerCommands(
  context: vscode.ExtensionContext,
  codeLens: PlaywrightCodeLensProvider
): void {
  const register = (id: string, fn: (...args: unknown[]) => unknown) =>
    context.subscriptions.push(vscode.commands.registerCommand(id, fn));

  register('playwrightSnippets.runTest', async (file: unknown, name: unknown) => {
    const target = await resolveTestTarget(file, name);
    if (target) {
      runTest(target.file, target.name);
    }
  });

  register('playwrightSnippets.runFile', async (file: unknown) => {
    const target = await resolveFileTarget(file);
    if (target) {
      runFile(target);
    }
  });

  register('playwrightSnippets.debugTest', async (file: unknown, name: unknown) => {
    const target = await resolveTestTarget(file, name);
    if (target) {
      await debugTest(target.file, target.name);
    }
  });

  register('playwrightSnippets.debugFile', async (file: unknown) => {
    const target = await resolveFileTarget(file);
    if (target) {
      await debugFile(target);
    }
  });

  register('playwrightSnippets.inspectTest', async (file: unknown, name: unknown) => {
    const target = await resolveTestTarget(file, name);
    if (target) {
      inspectTest(target.file, target.name);
    }
  });

  register('playwrightSnippets.inspectFile', async (file: unknown) => {
    const target = await resolveFileTarget(file);
    if (target) {
      inspectFile(target);
    }
  });

  register('playwrightSnippets.debugInspectTest', async (file: unknown, name: unknown) => {
    const target = await resolveTestTarget(file, name);
    if (target) {
      debugInspectTest(target.file, target.name);
    }
  });

  register('playwrightSnippets.debugInspectFile', async (file: unknown) => {
    const target = await resolveFileTarget(file);
    if (target) {
      debugInspectFile(target);
    }
  });

  register('playwrightSnippets.codeGen', () => codeGen());
  register('playwrightSnippets.showTrace', () => showTrace());
  register('playwrightSnippets.showReport', () => showReport());

  register('playwrightSnippets.runTestAtCursor', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const file = editor.document.uri.fsPath;
    const line = editor.selection.active.line;
    const items = parseTests(editor.document);
    const test = [...items].reverse().find((item) => item.line <= line && item.kind === 'test');

    if (test) {
      runTest(file, test.name);
      return;
    }

    runFile(file);
  });

  register('playwrightSnippets.refreshCodeLens', () => codeLens.refresh());
}
