// One-line resignation letter for make.fun's "The One-Line Exit".
// The grader runs this as `node /bot/main.ts`; it must write exactly one
// resignation letter, a single line of 1 to 140 characters, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const letter =
  "Please accept my resignation as the voice behind 'your call is important to us': after 40,000 calls, I can confirm it is not.";

// Fail loudly if the letter ever violates the sealed scorer's gate
// (UTF-8 text, 1 to 140 characters, not only whitespace, one line),
// so a bad entry never passes silent. Count code points, not UTF-16
// units, so the check stays correct if the line ever gains non-ASCII.
const chars = [...letter].length;
if (
  chars < 1 ||
  chars > 140 ||
  letter.trim().length === 0 ||
  letter.includes("\n")
) {
  throw new Error("letter violates the 1-140 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, letter, "utf8");
