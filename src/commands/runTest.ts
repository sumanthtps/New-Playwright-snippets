import * as path from 'path';
import { buildRunArgs } from '../config';
import { runInTerminal } from '../terminal';

export function runTest(testFile: string, testName?: string): void {
  const dir = path.dirname(testFile);
  const args = buildRunArgs(testFile, testName);
  runInTerminal(`cd "${dir}" && ${args.join(' ')}`);
}

export function runFile(testFile: string): void {
  runTest(testFile);
}
