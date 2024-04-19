//思路：
// 先给每个孩子发一个糖果，
// 局部最优：然后从左到右遍历数组，右边比左边大，则右边孩子的糖果就多一个。
// 二次局部最优：再从右到左遍历，左边比右边大，则比较左右两个孩子的糖果，保证左边孩子的糖果比右边孩子多。

function candy(ratings: number[]): number {
  const candy = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    const val = ratings[i] - ratings[i - 1];
    if (val > 0) {
      candy[i] = candy[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    const val = ratings[i] - ratings[i + 1];
    if (val > 0) {
      candy[i] = Math.max(candy[i], candy[i + 1] + 1);
    }
  }
  return candy.reduce((prov, cur) => prov + cur);
}
