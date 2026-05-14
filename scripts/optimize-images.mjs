import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(process.cwd(), "public", "screenshots");

const TARGETS = [
  /* Two sizes for desert: mobile-narrow + desktop-wide. The hero uses CSS
     image-set() to pick the right one. */
  { src: "desert.jpg", out: "desert-720.webp", width: 720, quality: 65 },
  { src: "desert.jpg", out: "desert.webp", width: 1600, quality: 72 },
  { src: "mesa.jpg", out: "mesa.webp", width: 1600, quality: 72 },
  { src: "vibrant-comparison.jpg", out: "vibrant-comparison.webp", width: 1600, quality: 70 },
];

for (const t of TARGETS) {
  const inputPath = path.join(ROOT, t.src);
  const outputPath = path.join(ROOT, t.out);
  const before = (await fs.stat(inputPath)).size;
  await sharp(inputPath)
    .resize({ width: t.width, withoutEnlargement: true })
    .webp({ quality: t.quality, effort: 6 })
    .toFile(outputPath);
  const after = (await fs.stat(outputPath)).size;
  console.log(
    `${t.src} → ${t.out}: ${(before / 1024).toFixed(1)}K → ${(after / 1024).toFixed(1)}K`,
  );
}
