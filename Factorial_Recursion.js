function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

for (let i = 0; i < 100000; i++) {
  factorial(10000);
}
console.log("hi");
// Time Complexity => O(n)
