import * as vscode from 'vscode';
import { getConfig } from '../config';
import { runInTerminal } from '../terminal';

export async function showTrace(): Promise<void> {
  const { workingDirectory } = getConfig();

  const uris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    openLabel: 'Open Trace',
    filters: { 'Playwright Trace': ['zip'] },
    defaultUri: vscode.Uri.file(workingDirectory),
  });

  if (!uris || uris.length === 0) {
    return;
  }

  const tracePath = uris[0].fsPath;
  runInTerminal(`cd "${workingDirectory}" && npx playwright show-trace "${tracePath}"`);
}
