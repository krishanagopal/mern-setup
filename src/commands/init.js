const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

module.exports = function init() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log(chalk.red("❌ Please provide a project name"));
    console.log(chalk.green("Usage: create-mern myApp [--auth]"));
    process.exit(1);
  }

  const templateType = process.argv.includes("--auth") ? "auth" : "basic";

  const templatePath = path.join(
    __dirname,
    "../../templates",
    templateType
  );

  const targetPath = path.join(process.cwd(), projectName);

  console.log(
    chalk.cyan(`\n🚀 Creating MERN Project (${templateType}): ${projectName}\n`)
  );

  if (fs.existsSync(targetPath)) {
    console.log(chalk.red("❌ Folder already exists"));
    process.exit(1);
  }

  fs.copySync(templatePath, targetPath);

  console.log(chalk.green("\n🎉 MERN Project Generated Successfully!\n"));
  console.log(chalk.blue("Next steps:"));
  console.log(`cd ${projectName}`);
  console.log(`cd server && npm install && npm run dev`);
  console.log(`cd ../client && npm install && npm run dev\n`);
};


