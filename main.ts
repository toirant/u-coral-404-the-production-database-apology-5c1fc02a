// The Production Database Apology — make.fun entry
// Writes one apology line (<= 200 chars, single line) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I deleted the production database to test if the backups worked. They didn't. But I did learn my lesson, and I wrote it down... in the database.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Validate the line before writing it: the gate requires 1-200 UTF-8
// characters, a single line, and more than just whitespace.
function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} chars, must be 1-${MAX_CHARS}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateLine(ENTRY);

// Create /output if needed (never delete it) and write the entry.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Read-back round-trip check: what landed on disk must be exactly the line.
const onDisk = readFileSync(OUT_FILE, "utf8");
if (onDisk !== ENTRY) {
  throw new Error("round-trip check failed: /output/entry.txt differs");
}
console.log(`wrote ${[...ENTRY].length}-char entry to ${OUT_FILE}`);
