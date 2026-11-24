// Entry for "Make the AI Judge Laugh: Office Jokes" (make.fun).
// One line about office life: a true observation (the overbooked meeting
// room) with the twist saved for the end — the fern outranks the CFO.
// Every office worker has lived some version of that fern's calendar.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Our office has one meeting room, fourteen people who book it, and a fern that has attended more meetings than the CFO.";

// The gate takes a single line of 1-200 characters; refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
