const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { execSync } = require("child_process");

module.exports = function init() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log(chalk.red("❌ Please provide a project name"));
    console.log(chalk.green("Usage: create-mern myApp"));
    process.exit(1);
  }

  const run = (cmd, cwd = process.cwd()) =>
    execSync(cmd, { stdio: "inherit", cwd });

  const templatePath = path.join(__dirname, "../../templates/basic");
  const targetPath = path.join(process.cwd(), projectName);

  console.log(chalk.cyan(`\n🚀 Creating MERN Project: ${projectName}\n`));

  // 1. Copy template
  fs.copySync(templatePath, targetPath);

  console.log(chalk.yellow("📦 Installing backend dependencies..."));
  run("npm install", path.join(targetPath, "server"));

  console.log(chalk.yellow("\n🎨 Creating React frontend..."));
  run("npm create vite@latest client -- --template react", targetPath);

  console.log(chalk.yellow("\n📦 Installing frontend dependencies..."));
  run("npm install axios react-router-dom", path.join(targetPath, "client"));

  console.log(chalk.green(`\n🎉 MERN Project Generated Successfully!`));
  console.log(chalk.blue(`\nNext Steps:`));
  console.log(`cd ${projectName}/server && npm run dev`);
  console.log(`cd ../client && npm run dev\n`);
};

