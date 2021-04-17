// *** Kadane's Algorithm ***
// Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each other in the input array)

function maxSum(arr) {
  let max, maxEndingHere;
  max = maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const curNum = arr[i];

    if (curNum < curNum + maxEndingHere) {
      maxEndingHere = curNum + maxEndingHere;
    } else {
      maxEndingHere = curNum;
    }

    if (max < maxEndingHere) {
      max = maxEndingHere;
    }
  }

  return max;
}

// This is a similar problem but the max sum should be from a subarray that it can not be the whole array but the max length of the subarray should be inputedArray.length - 1;

function maxSum(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else if (arr.length == 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  } else {
    let max = arr[0] + arr[1];

    for (let i = 0; i < arr.length; i++) {
      let add = arr[i];
      const end = i === 0 ? arr.length - 1 : arr.length;

      for (let j = i + 1; j < end; j++) {
        add += arr[j];
        if (add > max) max = add;
      }
    }
    return max;
  }
}
