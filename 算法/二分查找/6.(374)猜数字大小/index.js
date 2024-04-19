/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// 还是二分查找，从中间开始查。
 var guessNumber = function(n) {
  let l = 1;
  let r = n;
  let value;
  let result = 1;
  while(l <= r) {
      value = parseInt((r - l) / 2) + l;
      result = guess(value)
      if (result === -1) {
          r = value - 1
      } else if (result === 1) {
          l = value + 1
      } else {
          return value
      }
  }
};