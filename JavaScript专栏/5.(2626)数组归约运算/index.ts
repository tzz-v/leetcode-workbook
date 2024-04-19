type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) return init;
  let prop = init;
  nums.forEach((item) => {
    prop = fn(prop, item);
  });
  return prop;
}
