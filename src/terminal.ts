import * as vscode from 'vscode';
import { getConfig } from './config';

let terminal: vscode.Terminal | undefined;

function isAlive(t: vscode.Terminal): boolean {
  return vscode.window.terminals.includes(t);
}

export function getTerminal(): vscode.Terminal {
  if (terminal && isAlive(terminal)) {
    return terminal;
  }
  const { workingDirectory, env } = getConfig();
  terminal = vscode.window.createTerminal({
    name: 'Playwright',
    cwd: workingDirectory,
    env,
  });
  return terminal;
}

export function runInTerminal(command: string, extraEnv?: Record<string, string>): void {
  const term = getTerminal();

  if (extraEnv && Object.keys(extraEnv).length > 0) {
    // Inline env vars prepended to the command
    const envStr = Object.entries(extraEnv)
      .map(([k, v]) => `${k}=${v}`)
      .join(' ');
    term.sendText(`${envStr} ${command}`);
  } else {
    term.sendText(command);
  }

  term.show(true);
}

export function disposeTerminal(): void {
  if (terminal && isAlive(terminal)) {
    terminal.dispose();
  }
  terminal = undefined;
}
