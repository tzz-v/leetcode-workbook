import fetch from 'node-fetch';

const LEETCODE_GRAPHQL_URL = 'https://leetcode.com/graphql';

const query = `
  query getQuestion($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      title
      content
      difficulty
      likes
      dislikes
      similarQuestions
    }
  }
`;

const variables = {
  titleSlug: 'two-sum', // 替换为你想查询的题目 slug
};

fetch(LEETCODE_GRAPHQL_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
