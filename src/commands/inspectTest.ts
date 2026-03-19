import * as path from 'path';
import { buildInspectArgs } from '../config';
import { runInTerminal } from '../terminal';

export function inspectTest(testFile: string, testName?: string): void {
  const dir = path.dirname(testFile);
  const args = buildInspectArgs(testFile, testName);
  runInTerminal(`cd "${dir}" && ${args.join(' ')}`, { PWDEBUG: '1' });
}

export function inspectFile(testFile: string): void {
  inspectTest(testFile);
}
