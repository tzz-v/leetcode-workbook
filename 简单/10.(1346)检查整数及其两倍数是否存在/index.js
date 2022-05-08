/**
 * @param {number[]} arr
 * @return {boolean}
 */

// 暴力解，双for循环
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const val = Math.abs(arr[i]) < Math.abs(arr[j]) ? arr[i] * 2 : arr[i] / 2;
      if (val === arr[j]) return true;
    }
  }
  return false;
};
