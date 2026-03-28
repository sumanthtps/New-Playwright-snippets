import { buildInspectArgs } from '../config';
import { runInTerminal } from '../terminal';

export function inspectTest(testFile: string, testName?: string): void {
  const args = buildInspectArgs(testFile, testName);
  runInTerminal(args.join(' '), { PWDEBUG: '1' });
}

export function inspectFile(testFile: string): void {
  inspectTest(testFile);
}
