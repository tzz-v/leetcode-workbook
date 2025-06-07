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
 * 获取所有题目列表（分页获取）
 * @returns {Promise<Array>} 所有题目列表
 */
async function getAllProblems() {
  let allProblems = [];
  let skip = 0;
  const limit = 100;
  let hasMore = true;

  while (hasMore) {
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
    allProblems = allProblems.concat(questions);

    // 检查是否还有更多题目
    hasMore = questions.length === limit;
    skip += limit;

    // 安全限制，避免无限循环
    if (skip > 5000) {
      break;
    }
  }

  return allProblems;
}

/**
 * 通过题目号获取题目详细信息
 * @param {string} problemId - 题目号（例如：'1', '2'等）
 * @returns {Promise<Object>} 题目信息
 */
async function getProblemById(problemId) {
  try {
    await ensureFetch();

    // 获取所有题目列表
    const allProblems = await getAllProblems();

    // 找到对应题目号的题目
    const problem = allProblems.find((q) => q.frontendQuestionId === problemId);

    if (!problem) {
      throw new Error(`找不到题目号为 ${problemId} 的题目`);
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
