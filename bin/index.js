#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectName = process.argv[2] || "nova-ts-backend";
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, "../template");

if (fs.existsSync(targetDir)) {
  console.error(`❌ Folder "${projectName}" already exists.`);
  process.exit(1);
}

try {
  fs.cpSync(templateDir, targetDir, { recursive: true });
  console.log("✅ Project created successfully!");
  console.log("");
  console.log(`Next steps:`);
  console.log(`cd ${projectName}`);
  console.log(`npm install`);
  console.log(`npm run dev`);
} catch (error) {
  console.error("❌ Failed to create project:", error);
}
