function commonFactors(a: number, b: number): number {
  let count: number = 0;
  const limit: number = Math.min(a, b);

  for (let i = 1; i <= limit; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }

  return count;
}