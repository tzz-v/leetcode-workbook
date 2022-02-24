/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//因为数组的元素在内存地址中是连续的，所以直接删掉与目标值相等的项，为了内存的连续性，会导致数据的挪移，他的时间复杂度是O(n)总时间复杂度是O(n^2)。
// 所以，开始我想的是遍历数组，然后将等于目标值的项和最后一项互换位置（18-22行）然后在考虑一些边界情况，比如最后一项恰好也等于目标值的情况
var removeElement = function (nums, val) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    console.log(nums);
    while (nums[length - 1] === val) {
      length--;
    }
    if (i >= length) {
      return length;
    } else if (nums[i] === val) {
      nums[i] = nums[length - 1];
      nums[length - 1] = val;
      length--;
    }
  }
  return length;
};
// 虽然写出来了，但肯定不是最优解，想法设法想把里面的while循环给弄掉，想不出什么好办法，看了下官方题解，有个双指针法（快慢指针法： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作）
// 理解：循环遍历每个元素，右指针指向将要处理的元素，左指针指向下一个要替换值的位置
// - 如果右指针指向的元素不等于val，我们就将右指针指向的元素赋值给左指针位置，然后左右指针同时右移；
// - 如果右指针指向的元素等于val，他不能在输出数组里，此时左指针不动，右指针右移；
// - 遍历完后，左指针就是新数组的长度；
var removeElement = function (nums, val) {
  let slowIndex = 0;
  for (let lastIndex = 0; lastIndex < nums.length; lastIndex++) {
    if (nums[lastIndex] !== val) {
      nums[slowIndex] = nums[lastIndex];
      slowIndex++;
    }
  }
  return slowIndex;
};
// 还有个优化，我之前陷入了一个误区，总想把while循环去掉，其实可以把for循环去掉
var removeElement = function (nums, val) {
  let slowIndex = 0;
  let lastIndex = nums.length;

  while (slowIndex < lastIndex) {
    if (nums[slowIndex] === val) {
      nums[slowIndex] = nums[lastIndex - 1];
      lastIndex--;
    } else {
      slowIndex++;
    }
  }
  return slowIndex;
};
