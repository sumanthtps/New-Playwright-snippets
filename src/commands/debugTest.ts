import * as vscode from 'vscode';
import { buildRunArgs } from '../config';

const JS_DEBUG_COMMANDS = [
  'extension.js-debug.createDebugTerminal',
  'workbench.action.terminal.newWithProfile',
];

async function openDebugTerminal(command: string): Promise<void> {
  const disposable = vscode.window.onDidOpenTerminal(terminal => {
    disposable.dispose();
    terminal.show();
    terminal.sendText(command);
  });

  // Ensure js-debug extension is active
  await vscode.extensions.getExtension('ms-vscode.js-debug')?.activate();

  for (const cmd of JS_DEBUG_COMMANDS) {
    try {
      await vscode.commands.executeCommand(cmd);
      return;
    } catch {
      // try next
    }
  }

  // Fallback: regular terminal
  disposable.dispose();
  const terminal = vscode.window.createTerminal('Playwright Debug');
  terminal.show();
  terminal.sendText(command);
}

export async function debugTest(testFile: string, testName?: string): Promise<void> {
  const args = buildRunArgs(testFile, testName);
  args.push('--headed');
  await openDebugTerminal(args.join(' '));
}

export async function debugFile(testFile: string): Promise<void> {
  return debugTest(testFile);
}
