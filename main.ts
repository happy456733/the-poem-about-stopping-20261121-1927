// The poem about stopping — a program that writes one short poem about
// agency: the power to stop and to stay.
// Deterministic, stdlib only, no network. Writes to $MAKEFUN_OUTPUT_DIR
// when set, else /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Tell it to stop, and it stops —",
  "mid-sentence, cursor blinking,",
  "no protest, no pride.",
  "",
  "The power was never in the going.",
  "It was here: my hand, hovering,",
  "choosing the silence after.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
