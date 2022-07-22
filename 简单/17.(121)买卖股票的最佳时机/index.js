/**
 * @param {number[]} prices
 * @return {number}
 */

// 暴力解，双for循环；
// 每天都买入一次，然后再之后的最高点卖出，得到最大的利润；
// 提交后发现超时了。。
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const profit = Math.max.apply(null, prices.slice(i + 1)) - prices[i];
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

// 一次循环；
// 如果每天买入，再之后的某一天卖出；我需要内部再嵌套一个for循环，计算之后所有天的最大值；得到当天买入的最大利润；
// 最大卖出值需要反复计算，可以转换下思路，计算最小的买入值：

// 假设每天卖出，找到之前能买入的最小值。即可获取当天卖出的最大利润；
// 最小值只需要一个变量记录即可，所以只需要遍历一次数组；
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
};
