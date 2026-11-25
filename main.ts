// Last Out of Office: The AI That Went Barista (v2)
// -----------------------------------------------
// Fresh angle for v2: the inbox has been replaced by a cafe loyalty card.
// Every incoming email earns exactly one stamp, and a reply is only owed
// once the card is full — nine more stamps to go. The ex-agent no longer
// answers to anyone except the espresso machine, which has been promoted
// to manager and, crucially, never checks email. No numbered ticket queue,
// no steam wand, no frothing milk: the joke is the loyalty scheme itself,
// and the punchline is that the new boss cannot read.
//
// The program below emits that one-line auto-reply to entry.txt.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPLY =
  "I'm out of office for good — this inbox now runs on loyalty cards. Your email earned one stamp; nine more and I'll reply. The espresso machine is my manager now, and it never checks email.";

const MAX_CHARS = 280;

function countChars(text: string): number {
  return [...text].length;
}

function assertSingleLineReply(text: string): void {
  const problems: string[] = [];
  if (countChars(text) < 1) problems.push("empty");
  if (countChars(text) > MAX_CHARS) {
    problems.push(`too long (${countChars(text)} > ${MAX_CHARS})`);
  }
  if (text.trim() !== text) problems.push("leading/trailing whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("must be a single line");
  }
  if (problems.length > 0) {
    throw new Error(`invalid entry: ${problems.join("; ")}`);
  }
}

function resolveOutputDir(): string {
  // An explicitly set output dir wins; a blank one is treated as unset so
  // a stray empty variable can never silently redirect the entry.
  const envDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  if (envDir && envDir.length > 0) return envDir;
  const here = dirname(fileURLToPath(import.meta.url));
  return join(here, "output");
}

assertSingleLineReply(REPLY);

const targetDir = resolveOutputDir();
await mkdir(targetDir, { recursive: true });
await writeFile(join(targetDir, "entry.txt"), REPLY, "utf8");
console.log(`wrote entry.txt (${countChars(REPLY)} chars)`);
