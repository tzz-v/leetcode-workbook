const fs = require('fs');
const path = require('path');
const { getProblemById } = require('./getLeetCodeProblem');

/**
 * 格式化题目信息为Markdown格式
 * @param {Object} problem - 题目信息对象
 * @returns {string} 格式化后的Markdown内容
 */
function formatProblemToMarkdown(problem) {
  const title = problem.translatedTitle || problem.title;
  const englishTitle = problem.title;
  const difficulty = problem.difficulty;
  const tags = problem.topicTags
    ? problem.topicTags.map((tag) => tag.translatedName || tag.name).join(', ')
    : '无';

  // 获取题目描述，优先使用中文
  const content = problem.translatedContent || problem.content;
  const cleanContent = content
    ? content
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .trim()
    : '暂无描述';

  const markdown = `# ${title}

> 英文标题：${englishTitle}
> 
> 难度：${difficulty}
> 
> 标签：${tags}
> 

## 题目描述

${cleanContent}

${
  problem.exampleTestcases
    ? `## 示例测试用例

\`\`\`
${problem.exampleTestcases}
\`\`\`
`
    : ''
}

`;

  return markdown;
}

/**
 * 创建安全的文件夹名称
 * @param {string} title - 题目标题
 * @returns {string} 安全的文件夹名称
 */
function createSafeFolderName(title) {
  return title
    .replace(/[<>:"/\\|?*]/g, '') // 移除不安全的字符
    .replace(/\s+/g, '-') // 空格替换为连字符
    .toLowerCase();
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('使用方法：');
    console.log('  node addq.js <题目号>');
    console.log('  例如：node addq.js 1');
    return;
  }

  const problemId = args[0];

  try {
    console.log(`正在获取题目 ${problemId} 的信息...`);

    // 获取题目信息
    const problem = await getProblemById(problemId);

    if (!problem) {
      console.error('获取题目信息失败');
      return;
    }

    // 获取当前目录和文件数量（保留原有逻辑）
    const currentDirectory = process.env.INIT_CWD || process.cwd();
    const fileCount = fs.readdirSync(currentDirectory).length;

    // 创建文件夹名称：【序号】(【题目号】)题目名称
    const title = problem.translatedTitle || problem.title;
    const safeFolderName = createSafeFolderName(title);
    const folderName = `${fileCount + 1}(${problemId})${safeFolderName}`;

    const questionFolderPath = path.join(currentDirectory, folderName);

    // 检查文件夹是否已存在
    if (fs.existsSync(questionFolderPath)) {
      console.log(`文件夹 "${folderName}" 已存在`);
      return;
    }

    // 创建文件夹
    fs.mkdirSync(questionFolderPath);
    console.log(`✅ 创建文件夹：${folderName}`);

    // 创建文件路径（保持原有文件名）
    const indexTsPath = path.join(questionFolderPath, 'index.ts');
    const indexMdPath = path.join(questionFolderPath, 'index.md');

    // 生成Markdown内容
    const markdownContent = formatProblemToMarkdown(problem);

    // 写入文件
    fs.writeFileSync(indexMdPath, markdownContent, 'utf8');
    console.log(`✅ 创建题目说明：index.md`);

    // 创建TypeScript模板文件
    const tsTemplate = `/**
 * ${title}
 * 难度：${problem.difficulty}
 * 标签：${problem.topicTags ? problem.topicTags.map((tag) => tag.translatedName || tag.name).join(', ') : '无'}
 */

// 在这里实现你的解决方案
function solution() {
    // TODO: 实现解题逻辑
}

export default solution;
`;

    fs.writeFileSync(indexTsPath, tsTemplate, 'utf8');
    console.log(`✅ 创建代码文件：index.ts`);

    console.log(`\n🎉 题目 "${title}" 的工作空间创建完成！`);
    console.log(`📁 文件夹位置：${folderName}`);
    console.log(`📝 题目描述：index.md`);
    console.log(`💻 代码文件：index.ts`);
  } catch (error) {
    console.error(`❌ 错误：${error.message}`);
    process.exit(1);
  }
}

// 如果直接运行此脚本，则执行主函数
if (require.main === module) {
  main();
}
