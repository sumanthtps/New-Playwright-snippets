import * as vscode from 'vscode';
import { PlaywrightCodeLensProvider } from './codeLensProvider';
import { registerCommands } from './commands/index';
import { disposeTerminal } from './terminal';

export function activate(context: vscode.ExtensionContext): void {
  const codeLens = new PlaywrightCodeLensProvider();

  context.subscriptions.push(
    vscode.languages.registerCodeLensProvider(
      [
        { language: 'javascript', scheme: 'file' },
        { language: 'typescript', scheme: 'file' },
        { language: 'javascriptreact', scheme: 'file' },
        { language: 'typescriptreact', scheme: 'file' },
      ],
      codeLens
    )
  );

  registerCommands(context, codeLens);

  // Refresh code lenses when a file is saved or opened
  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument(() => codeLens.refresh()),
    vscode.workspace.onDidOpenTextDocument(() => codeLens.refresh())
  );
}

export function deactivate(): void {
  disposeTerminal();
}
