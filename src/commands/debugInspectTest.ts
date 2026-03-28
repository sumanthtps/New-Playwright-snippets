import { buildDebugArgs } from '../config';
import { runInTerminal } from '../terminal';

export function debugInspectTest(testFile: string, testName?: string): void {
  const args = buildDebugArgs(testFile, testName);
  runInTerminal(args.join(' '));
}

export function debugInspectFile(testFile: string): void {
  debugInspectTest(testFile);
}
