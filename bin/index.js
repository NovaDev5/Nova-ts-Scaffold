#!/usr/bin/env node

import fs from "fs";
import path from "path";

const projectName = process.argv[2] || "nova-ts";

const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(process.cwd(), "template");

if (fs.existsSync(targetDir)) {
  console.log("Folder already exists");
  process.exit(1);
}

fs.cpSync(templateDir, targetDir, { recursive: true });

console.log(`Project created: ${projectName}`);
console.log("Run the following:");
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");
