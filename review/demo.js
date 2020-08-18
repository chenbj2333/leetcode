function common(arr, k) {
  const index = k % arr.length;
  if (index > 0) {
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, index - 1);
    reverse(arr, index, arr.length - 1);
  }
  console.log(arr);
}

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// const res = common([4, 9, 5], [9, 4, 9, 8, 4]);
common([1, 2, 3, 4, 5, 6, 7], 3);
