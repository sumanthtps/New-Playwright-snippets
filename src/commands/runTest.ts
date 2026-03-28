import { buildRunArgs } from '../config';
import { runInTerminal } from '../terminal';

export function runTest(testFile: string, testName?: string): void {
  const args = buildRunArgs(testFile, testName);
  runInTerminal(args.join(' '));
}

export function runFile(testFile: string): void {
  runTest(testFile);
}
