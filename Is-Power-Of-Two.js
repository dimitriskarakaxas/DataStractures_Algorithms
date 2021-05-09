function isPowerofTwo(number) {
  if (number < 1) return false;
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) return false;
    dividedNumber = dividedNumber / 2;
  }
  return true;
}
// Best Case: number = 13 => O(1)
// Average Case: O(log n)
// Worst Case: 1,125,899,906,842,624 => O(log n)

function isPowerOfTwoBinary(number) {
  if (number < 1 || number % 1 !== 0) return false;
  return (number & (number - 1)) === 0;
}
// Time Complexity => O(1)
