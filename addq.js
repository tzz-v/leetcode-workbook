const fs = require('fs');
const path = require('path');

const fileName = process.argv.slice(2);
const currentDirectory = process.env.INIT_CWD;
const fileCount = fs.readdirSync(currentDirectory).length;
const questionFileName = path.join(
  currentDirectory,
  `${fileCount + 1}${fileName}`
);

const indexTsPath = path.join(questionFileName, 'index.ts');
const indexMdPath = path.join(questionFileName, 'index.md');

fs.mkdirSync(questionFileName);
fs.writeFileSync(indexTsPath, '');
fs.writeFileSync(indexMdPath, '');
