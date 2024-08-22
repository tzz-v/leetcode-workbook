function kLengthApart(nums: number[], k: number): boolean {
  if (k === 0) return true;
  return nums.every((val, index) => {
    if (index === 0) return true;
    if (val === 0) return true;
    for (let i = index - k; i < index; i++) {
      if (nums[i] === 1) return false;
    }
    return true;
  });
}
