// Extracts base64-encoded project thumbnails into client/public/thumbnails/.
// Thumbnails are stored as text across scripts/thumbnails-N.json because they
// are committed through a text-only transport. Runs automatically via npm
// `prebuild` / `predev`. Idempotent: skips files that already exist.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "client", "public", "thumbnails");
const scriptsDir = join(root, "scripts");

const manifest = {};
for (const file of readdirSync(scriptsDir)) {
  if (/^thumbnails-\d+\.json$/.test(file)) {
    Object.assign(manifest, JSON.parse(readFileSync(join(scriptsDir, file), "utf8")));
  }
}

mkdirSync(outDir, { recursive: true });
let written = 0;
for (const [name, b64] of Object.entries(manifest)) {
  const dest = join(outDir, name);
  if (!existsSync(dest)) {
    writeFileSync(dest, Buffer.from(b64, "base64"));
    written++;
  }
}
console.log(`thumbnails: ${written} extracted, ${Object.keys(manifest).length} total`);
