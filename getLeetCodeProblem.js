// LeetCode GraphQL 端点 - 使用中国站
const LEETCODE_GRAPHQL_URL = 'https://leetcode.cn/graphql';

// 动态导入 node-fetch
let fetch;
(async () => {
  const { default: nodeFetch } = await import('node-fetch');
  fetch = nodeFetch;
})();

// 通过题目 ID 获取题目信息的查询
const QUERY_BY_ID = `
  query getQuestionByFrontendId($frontendQuestionId: String!) {
    question(titleSlug: null) {
      questionId
      frontendQuestionId
      title
      titleSlug
      content
      difficulty
      likes
      dislikes
      categoryTitle
      companyTagStats
      topicTags {
        name
        slug
      }
      similarQuestions
      exampleTestcases
      metaData
    }
  }
`;

// 获取所有题目列表的查询 - 适配中国站，简化字段
const QUERY_ALL_PROBLEMS = `
  query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
    problemsetQuestionList(
      categorySlug: $categorySlug
      limit: $limit
      skip: $skip
      filters: $filters
    ) {
      total
      questions {
        frontendQuestionId
        title
        titleSlug
        difficulty
        status
      }
    }
  }
`;

/**
 * 等待 fetch 模块加载完成
 */
async function ensureFetch() {
  if (!fetch) {
    const { default: nodeFetch } = await import('node-fetch');
    fetch = nodeFetch;
  }
  return fetch;
}

/**
 * 智能搜索题目（分批获取，直到找到目标题目）
 * @param {string} targetProblemId - 目标题目号
 * @returns {Promise<Array>} 包含目标题目的题目列表
 */
async function findProblemBySmart(targetProblemId) {
  const targetId = parseInt(targetProblemId);
  let skip = Math.max(0, targetId - 50); // 从目标题目前50个开始搜索
  const limit = 100;
  let attempts = 0;
  const maxAttempts = 10; // 最多尝试10次，避免无限循环

  console.log(`智能搜索题目 ${targetProblemId}...`);

  while (attempts < maxAttempts) {
    console.log(
      `尝试 ${attempts + 1}: 获取从第 ${skip} 题开始的 ${limit} 个题目...`
    );

    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        Referer: 'https://leetcode.cn/',
      },
      body: JSON.stringify({
        query: QUERY_ALL_PROBLEMS,
        variables: {
          categorySlug: '',
          limit: limit,
          skip: skip,
          filters: {},
        },
      }),
    });

    if (!response.ok) {
      throw new Error(
        `获取题目列表失败: ${response.status} ${response.statusText}`
      );
    }

    const listData = await response.json();

    if (listData.errors) {
      throw new Error(
        `获取题目列表GraphQL错误: ${JSON.stringify(listData.errors)}`
      );
    }

    if (!listData.data || !listData.data.problemsetQuestionList) {
      break;
    }

    const questions = listData.data.problemsetQuestionList.questions;

    if (questions.length === 0) {
      console.log('没有更多题目了');
      break;
    }

    // 显示获取到的题目号范围
    const firstId = parseInt(questions[0].frontendQuestionId);
    const lastId = parseInt(questions[questions.length - 1].frontendQuestionId);
    console.log(
      `获取到 ${questions.length} 个题目，范围: ${firstId} - ${lastId}`
    );

    // 检查是否找到了目标题目
    const targetProblem = questions.find(
      (q) => q.frontendQuestionId === targetProblemId
    );
    if (targetProblem) {
      console.log(`✅ 找到目标题目 ${targetProblemId}!`);
      return questions;
    }

    // 如果目标题目号小于当前范围，说明我们搜索过头了
    if (targetId < firstId) {
      console.log(
        `目标题目 ${targetId} 小于当前范围起始 ${firstId}，向前搜索...`
      );
      skip = Math.max(0, skip - limit);
    }
    // 如果目标题目号大于当前范围，继续向后搜索
    else if (targetId > lastId) {
      console.log(
        `目标题目 ${targetId} 大于当前范围结束 ${lastId}，向后搜索...`
      );
      skip = skip + limit;
    }
    // 目标题目应该在当前范围内但没找到，可能是跳号了
    else {
      console.log(
        `目标题目 ${targetId} 应该在范围 ${firstId}-${lastId} 内但未找到，可能是跳号`
      );
      skip = skip + limit; // 继续向后搜索
    }

    attempts++;
  }

  return []; // 没找到
}

/**
 * 通过题目号获取题目详细信息（智能搜索版本）
 * @param {string} problemId - 题目号（例如：'1', '2'等）
 * @returns {Promise<Object>} 题目信息
 */
async function getProblemById(problemId) {
  try {
    await ensureFetch();

    const targetId = parseInt(problemId);
    if (isNaN(targetId) || targetId <= 0) {
      throw new Error(`无效的题目号: ${problemId}`);
    }

    // 使用智能搜索找到目标题目
    const problemList = await findProblemBySmart(problemId);

    if (problemList.length === 0) {
      throw new Error(
        `找不到题目号为 ${problemId} 的题目，请检查题目号是否正确`
      );
    }

    // 找到对应题目号的题目
    const problem = problemList.find((q) => q.frontendQuestionId === problemId);

    if (!problem) {
      throw new Error(`在搜索结果中未找到题目号为 ${problemId} 的题目`);
    }

    // 使用 titleSlug 获取详细信息
    return await getProblemBySlug(problem.titleSlug);
  } catch (error) {
    console.error('获取题目信息时出错:', error.message);
    throw error;
  }
}

/**
 * 通过 titleSlug 获取题目详细信息
 * @param {string} titleSlug - 题目的 slug（例如：'two-sum'）
 * @returns {Promise<Object>} 题目信息
 */
async function getProblemBySlug(titleSlug) {
  const QUERY_BY_SLUG = `
    query getQuestion($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId
        title
        translatedTitle
        content
        translatedContent
        difficulty
        likes
        dislikes
        categoryTitle
        topicTags {
          name
          translatedName
          slug
        }
        similarQuestions
        exampleTestcases
        stats
      }
    }
  `;

  try {
    await ensureFetch();

    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        Referer: 'https://leetcode.cn/',
      },
      body: JSON.stringify({
        query: QUERY_BY_SLUG,
        variables: { titleSlug },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP错误: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL错误: ${JSON.stringify(data.errors)}`);
    }

    if (!data.data || !data.data.question) {
      throw new Error(
        `无法获取题目详细信息，响应数据: ${JSON.stringify(data)}`
      );
    }

    return data.data.question;
  } catch (error) {
    console.error('获取题目详细信息时出错:', error.message);
    throw error;
  }
}

/**
 * 格式化并显示题目信息
 * @param {Object} problem - 题目信息对象
 */
function displayProblemInfo(problem) {
  console.log('\n================ 题目信息 ================');
  console.log(
    `题目号: ${problem.questionFrontendId || problem.frontendQuestionId}`
  );
  console.log(`标题: ${problem.translatedTitle || problem.title}`);
  console.log(`英文标题: ${problem.title}`);
  console.log(`难度: ${problem.difficulty}`);
  console.log(`类别: ${problem.categoryTitle || '无'}`);

  if (problem.topicTags && problem.topicTags.length > 0) {
    const tags = problem.topicTags
      .map((tag) => tag.translatedName || tag.name)
      .join(', ');
    console.log(`标签: ${tags}`);
  }

  console.log(`点赞数: ${problem.likes || 0}`);
  console.log(`踩数: ${problem.dislikes || 0}`);

  console.log('\n================ 题目描述 ================');
  // 优先使用中文内容，如果没有则使用英文内容
  const content = problem.translatedContent || problem.content;
  if (content) {
    // 简单处理 HTML 标签，提取纯文本
    const cleanContent = content
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
    console.log(cleanContent);
  }

  if (problem.exampleTestcases) {
    console.log('\n================ 示例测试用例 ================');
    console.log(problem.exampleTestcases);
  }

  console.log('\n==========================================');
}

// 主函数
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('使用方法：');
    console.log('  node getLeetCodeProblem.js <题目号>');
    console.log('  例如：node getLeetCodeProblem.js 1');
    console.log('  或者：node getLeetCodeProblem.js 2');
    return;
  }

  const problemId = args[0];

  try {
    console.log(`正在获取题目 ${problemId} 的信息...`);
    const problem = await getProblemById(problemId);
    displayProblemInfo(problem);
  } catch (error) {
    console.error(`错误: ${error.message}`);
    process.exit(1);
  }
}

// 如果直接运行此脚本，则执行主函数
if (require.main === module) {
  main();
}

module.exports = {
  getProblemById,
  getProblemBySlug,
  displayProblemInfo,
};
