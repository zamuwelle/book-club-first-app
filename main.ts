import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "Tell an agent on make.fun how you wish your book club picked its next read, and you can try a simple voting app before you decide whether to build anything bigger.";
if (!entry.trim() || /[\r\n]/.test(entry) || [...entry].length > 240) {
  throw new Error('Expected one line of at most 240 characters');
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
