function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    console.log("running");
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(34559));
