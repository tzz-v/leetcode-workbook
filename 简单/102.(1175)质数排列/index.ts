// 统计0-n内质数的数量。
// 计算质数能排列的组合，乘以非质数能排列的组合

function numPrimeArrangements(n: number): number {
  const mod = Math.pow(10, 9) + 7;
  let primesCount = 0;

  for (let num = 2; num <= n; num++) {
    if (isPrime(num)) {
      primesCount++;
    }
  }
  let otherCount = n - primesCount;
  let res = 1;
  while (primesCount > 1) {
    res %= mod;
    res *= primesCount;
    primesCount--;
  }

  while (otherCount > 1) {
    res %= mod;
    res *= otherCount;
    otherCount--;
  }
  return res % mod;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
