#!/usr/bin/env node

const fs = require("fs-extra");
const chalk = require("chalk");
const { execSync } = require("child_process");

const projectName = process.argv[2];

if (!projectName) {
  console.log(chalk.red("❌ Please provide a project name"));
  console.log(chalk.green("Usage: create-mern myApp"));
  process.exit(1);
}

const run = (cmd) => execSync(cmd, { stdio: "inherit" });

console.log(chalk.cyan(`\n🚀 Creating MERN Project: ${projectName}\n`));

fs.mkdirSync(projectName);

// ---------- BACKEND ----------
console.log(chalk.yellow("📦 Setting up backend..."));

fs.mkdirSync(`${projectName}/server`);
fs.writeFileSync(
  `${projectName}/server/index.js`,
  `
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.json({ message: "API working!" }));

app.listen(5000, () => console.log("Server running at 5000"));
`
);

fs.writeFileSync(
  `${projectName}/server/package.json`,
  `
{
  "name": "server",
  "type": "module",
  "scripts": {
    "dev": "nodemon index.js"
  }
}
`
);

run(`cd ${projectName}/server && npm install express mongoose cors dotenv nodemon`);

// ---------- FRONTEND ----------
console.log(chalk.yellow("\n🎨 Creating React frontend..."));

run(`cd ${projectName} && npm create vite@latest client -- --template react`);

console.log(chalk.yellow("\n📦 Installing frontend dependencies..."));
run(`cd ${projectName}/client && npm install axios react-router-dom`);

console.log(chalk.green(`\n🎉 MERN Project Generated Successfully!`));
console.log(chalk.blue(`\nNext Steps:`));
console.log(`cd ${projectName}/server && npm run dev`);
console.log(`cd ../client && npm run dev\n`);
