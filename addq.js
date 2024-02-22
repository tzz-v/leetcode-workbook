const fs = require('fs');
const path = require('path');

// 解析命令行参数
const args = process.argv.slice(2);
const folderNames = args.slice(0, -1);
const newFolderName = args[args.length - 1];

// 获取当前工作目录
const currentDirectory = process.cwd();

// 进入指定文件夹并创建新文件夹
const targetDirectory = path.join(currentDirectory, ...folderNames);
const newFolderPath = path.join(targetDirectory, newFolderName);

// 检查目录是否存在
if (!fs.existsSync(targetDirectory)) {
  console.log(
    '\x1b[31m%s\x1b[0m',
    `问题创建失败，目录不存在: '${targetDirectory}'`
  );
  return;
}

fs.mkdirSync(newFolderPath);

// 在新文件夹内创建 index.ts 和 index.md
const indexTsPath = path.join(newFolderPath, 'index.ts');
const indexMdPath = path.join(newFolderPath, 'index.md');

fs.writeFileSync(indexTsPath, '');
fs.writeFileSync(indexMdPath, '');

console.log('\x1b[32m%s\x1b[0m', `问题创建成功: '${newFolderPath}'`);
