import * as vscode from 'vscode';
import { parseTests, isTestFile } from './testParser';

export class PlaywrightCodeLensProvider implements vscode.CodeLensProvider {
  private _onDidChangeCodeLenses = new vscode.EventEmitter<void>();
  readonly onDidChangeCodeLenses = this._onDidChangeCodeLenses.event;

  refresh(): void {
    this._onDidChangeCodeLenses.fire();
  }

  provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
    if (!isTestFile(document)) {
      return [];
    }

    const lenses: vscode.CodeLens[] = [];
    const items = parseTests(document);

    // Add "Run All" at top of file
    const fileRange = new vscode.Range(0, 0, 0, 0);
    lenses.push(
      new vscode.CodeLens(fileRange, {
        title: '▶ Run All',
        command: 'playwrightSnippets.runFile',
        arguments: [document.uri.fsPath],
      }),
      new vscode.CodeLens(fileRange, {
        title: '⬡ Debug All',
        command: 'playwrightSnippets.debugFile',
        arguments: [document.uri.fsPath],
      }),
      new vscode.CodeLens(fileRange, {
        title: '⬡ Inspect',
        command: 'playwrightSnippets.inspectFile',
        arguments: [document.uri.fsPath],
      })
    );

    for (const item of items) {
      const range = new vscode.Range(item.line, 0, item.line, 0);

      if (item.kind === 'test') {
        lenses.push(
          new vscode.CodeLens(range, {
            title: '▶ Run',
            command: 'playwrightSnippets.runTest',
            arguments: [document.uri.fsPath, item.name],
          }),
          new vscode.CodeLens(range, {
            title: '⬡ Debug',
            command: 'playwrightSnippets.debugTest',
            arguments: [document.uri.fsPath, item.name],
          }),
          new vscode.CodeLens(range, {
            title: '⬡ Debug with Inspector',
            command: 'playwrightSnippets.debugInspectTest',
            arguments: [document.uri.fsPath, item.name],
          })
        );
      } else {
        // describe block — run all tests in the suite
        lenses.push(
          new vscode.CodeLens(range, {
            title: '▶ Run Suite',
            command: 'playwrightSnippets.runTest',
            arguments: [document.uri.fsPath, item.name],
          }),
          new vscode.CodeLens(range, {
            title: '⬡ Debug Suite',
            command: 'playwrightSnippets.debugTest',
            arguments: [document.uri.fsPath, item.name],
          }),
          new vscode.CodeLens(range, {
            title: '⬡ Debug Suite with Inspector',
            command: 'playwrightSnippets.debugInspectTest',
            arguments: [document.uri.fsPath, item.name],
          })
        );
      }
    }

    return lenses;
  }
}
