// 使用快排，对数组进行排序。

function findKthLargest(nums: number[], k: number): number {
  const quiclSort = (arr: number[], left: number, right: number) => {
    if (left >= right) return;
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];

    const target = nums.length - k;

    // 只需要排部分数组即可，剩余部分不用动
    i > target ? quiclSort(arr, 0, i - 1) : quiclSort(arr, i + 1, right);
  };
  quiclSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
}
