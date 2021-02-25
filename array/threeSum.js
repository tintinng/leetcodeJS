var threeSum = function(nums) {
    let res = [];
    // 为了避免重复，先给nums排序
    nums.sort((a, b) => a - b);
    // 固定最小值，双指针
    for (let i = 0; i < nums.length; i++) {
        // 重复元素跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1, r = nums.length - 1;
        let target = 0 - nums[i];
        if (nums[l] > target) {
            break;
        }
        while (l < r) {
            // 跳过重复元素
            if ((l - 1) !== i && nums[l] === nums[l - 1]) {
                l++;
                continue;
            }
            // 如果和小于target，移动l
            if (nums[l] + nums[r] < target) {
                l++;
            } else if (nums[l] + nums[r] > target) {
                // 如果和大于target，移动r
                r--;
            } else {
                // 如果和等于target，加入res
                res.push([nums[i], nums[l], nums[r]])
                l++;
                r--;
            }
        }
    }

    return res;
}

let nums = [-1, 0, 1, 2, -1, -4]
let nums2 = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
console.log(threeSum(nums2));