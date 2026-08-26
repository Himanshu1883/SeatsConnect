import { rmSync } from "node:fs";

for (const dir of [".next", ".next-dev"]) {
  rmSync(dir, { recursive: true, force: true });
  console.log(`removed ${dir}`);
}
