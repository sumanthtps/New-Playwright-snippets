import * as vscode from 'vscode';
import { getConfig } from '../config';
import { runInTerminal } from '../terminal';

export async function codeGen(): Promise<void> {
  const { workingDirectory } = getConfig();

  const url = await vscode.window.showInputBox({
    prompt: 'Enter starting URL for Playwright Codegen (leave blank to skip)',
    placeHolder: 'https://example.com',
    value: '',
  });

  if (url === undefined) {
    // User cancelled
    return;
  }

  const cmd = url
    ? `cd "${workingDirectory}" && npx playwright codegen ${url}`
    : `cd "${workingDirectory}" && npx playwright codegen`;

  runInTerminal(cmd);
}
