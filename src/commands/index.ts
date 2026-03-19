import * as vscode from 'vscode';
import { runTest, runFile } from './runTest';
import { debugTest, debugFile } from './debugTest';
import { inspectTest, inspectFile } from './inspectTest';
import { debugInspectTest, debugInspectFile } from './debugInspectTest';
import { codeGen } from './codeGen';
import { showTrace } from './showTrace';
import { showReport } from './showReport';
import { PlaywrightCodeLensProvider } from '../codeLensProvider';
import { parseTests } from '../testParser';

export function registerCommands(
  context: vscode.ExtensionContext,
  codeLens: PlaywrightCodeLensProvider
): void {
  const register = (id: string, fn: (...args: unknown[]) => unknown) =>
    context.subscriptions.push(vscode.commands.registerCommand(id, fn));

  register('playwrightSnippets.runTest', (file: unknown, name: unknown) =>
    runTest(file as string, name as string | undefined)
  );
  register('playwrightSnippets.runFile', (file: unknown) => runFile(file as string));

  register('playwrightSnippets.debugTest', (file: unknown, name: unknown) =>
    debugTest(file as string, name as string | undefined)
  );
  register('playwrightSnippets.debugFile', (file: unknown) => debugFile(file as string));

  register('playwrightSnippets.inspectTest', (file: unknown, name: unknown) =>
    inspectTest(file as string, name as string | undefined)
  );
  register('playwrightSnippets.inspectFile', (file: unknown) => inspectFile(file as string));

  register('playwrightSnippets.debugInspectTest', (file: unknown, name: unknown) =>
    debugInspectTest(file as string, name as string | undefined)
  );
  register('playwrightSnippets.debugInspectFile', (file: unknown) => debugInspectFile(file as string));

  register('playwrightSnippets.codeGen', () => codeGen());
  register('playwrightSnippets.showTrace', () => showTrace());
  register('playwrightSnippets.showReport', () => showReport());

  // Run test at cursor
  register('playwrightSnippets.runTestAtCursor', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const file = editor.document.uri.fsPath;
    const line = editor.selection.active.line;
    const items = parseTests(editor.document);
    // Find the nearest test above cursor
    const test = [...items].reverse().find((t) => t.line <= line && t.kind === 'test');
    if (test) {
      runTest(file, test.name);
    } else {
      runFile(file);
    }
  });

  register('playwrightSnippets.refreshCodeLens', () => codeLens.refresh());
}
