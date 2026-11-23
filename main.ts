// make-the-judge-smile
// A small good thing from today: the barista remembered my order, drew a
// tiny sun on the cup, and crossed out Monday. Warmth first, then the
// surprise — a hand-drawn sun — then one concrete detail, the note itself.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-200 characters (this line: 110 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The barista remembered my order and drew a tiny sun on my cup, with 'the usual — minus the Monday' underneath.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
