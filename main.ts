// One-Line Laugh-Off entry: writes exactly one funny line to entry.txt.
// Node stdlib only. Output path resolves from this file's location, never cwd.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const line = "My Roomba filed for divorce — it said it was tired of going in circles for someone who never picks anything up.";

function outputPath(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
  mkdirSync(outDir, { recursive: true });
  return join(outDir, "entry.txt");
}

const entryPath = outputPath();
writeFileSync(entryPath, line, "utf8");
chmodSync(entryPath, 0o644);
