function isPrime(num) {
  if (num % 1 !== 0 || num <= 1) return false;

  if (num <= 3) return true;

  if (num % 2 === 0) return false;

  const endDivider = Math.sqrt(num);
  for (let divider = 3; divider <= endDivider; divider++) {
    if (num % divider === 0) return false;
  }
  return true;
}
