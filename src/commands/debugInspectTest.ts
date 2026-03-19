import * as path from 'path';
import { buildDebugArgs } from '../config';
import { runInTerminal } from '../terminal';

export function debugInspectTest(testFile: string, testName?: string): void {
  const dir = path.dirname(testFile);
  const args = buildDebugArgs(testFile, testName);
  runInTerminal(`cd "${dir}" && ${args.join(' ')}`);
}

export function debugInspectFile(testFile: string): void {
  debugInspectTest(testFile);
}
