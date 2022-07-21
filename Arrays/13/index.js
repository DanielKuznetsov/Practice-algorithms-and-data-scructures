const sortArrayByParity = function (nums) {
  let odd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[odd]] = [nums[odd], nums[i]];
      odd++;
    }
  }

  console.log(nums);
};

sortArrayByParity([3, 1, 2, 4]);
