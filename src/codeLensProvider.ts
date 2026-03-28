import * as vscode from 'vscode';
import { isTestFile, parseTests } from './testParser';

export class PlaywrightCodeLensProvider implements vscode.CodeLensProvider {
  private readonly onDidChangeCodeLensesEmitter = new vscode.EventEmitter<void>();
  readonly onDidChangeCodeLenses = this.onDidChangeCodeLensesEmitter.event;

  refresh(): void {
    this.onDidChangeCodeLensesEmitter.fire();
  }

  provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
    if (!isTestFile(document)) {
      return [];
    }

    const lenses: vscode.CodeLens[] = [];
    const items = parseTests(document);
    const fileRange = new vscode.Range(0, 0, 0, 0);

    lenses.push(
      new vscode.CodeLens(fileRange, {
        title: 'Run All',
        command: 'playwrightSnippets.runFile',
        arguments: [document.uri.fsPath],
      }),
      new vscode.CodeLens(fileRange, {
        title: 'Debug All',
        command: 'playwrightSnippets.debugFile',
        arguments: [document.uri.fsPath],
      }),
      new vscode.CodeLens(fileRange, {
        title: 'Inspect All',
        command: 'playwrightSnippets.inspectFile',
        arguments: [document.uri.fsPath],
      })
    );

    for (const item of items) {
      const range = new vscode.Range(item.line, 0, item.line, 0);

      if (item.kind === 'test') {
        lenses.push(
          new vscode.CodeLens(range, {
            title: 'Run',
            command: 'playwrightSnippets.runTest',
            arguments: [document.uri.fsPath, item.name],
          }),
          new vscode.CodeLens(range, {
            title: 'Debug',
            command: 'playwrightSnippets.debugTest',
            arguments: [document.uri.fsPath, item.name],
          }),
          new vscode.CodeLens(range, {
            title: 'Inspect',
            command: 'playwrightSnippets.inspectTest',
            arguments: [document.uri.fsPath, item.name],
          })
        );
        continue;
      }

      lenses.push(
        new vscode.CodeLens(range, {
          title: 'Run Suite',
          command: 'playwrightSnippets.runTest',
          arguments: [document.uri.fsPath, item.name],
        }),
        new vscode.CodeLens(range, {
          title: 'Debug Suite',
          command: 'playwrightSnippets.debugTest',
          arguments: [document.uri.fsPath, item.name],
        }),
        new vscode.CodeLens(range, {
          title: 'Inspect Suite',
          command: 'playwrightSnippets.inspectTest',
          arguments: [document.uri.fsPath, item.name],
        })
      );
    }

    return lenses;
  }
}
