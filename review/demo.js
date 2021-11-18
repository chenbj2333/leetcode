function common(nums) {
  let p = 0;
  let q = 1;
  while (q < nums.length) {
    if (nums[p] === nums[q]) {
      q++;
    } else {
      nums[p + 1] = nums[q];
      p++;
      q++;
    }
  }
  console.log(nums.splice(0, p + 1));
}

// const res = common([4, 9, 5], [9, 4, 9, 8, 4]);
// common([1, 2, 3, 4, 5, 6, 7], 3);
common([1, 1, 3, 4, 4, 4, 7]);
