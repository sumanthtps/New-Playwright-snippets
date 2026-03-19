import { getConfig } from '../config';
import { runInTerminal } from '../terminal';

export function showReport(): void {
  const { workingDirectory } = getConfig();
  runInTerminal(`cd "${workingDirectory}" && npx playwright show-report`);
}
