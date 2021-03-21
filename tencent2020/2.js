const readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// rl.on("line", function(input) {
//     let nums = input.split(' ').map(ele => Number(ele));
//     // buildingsInView(nums).forEach(ele => console.log(ele));
//     buildingsInView(nums).forEach(ele => rl.output.write(1));
// })

function buildingsInView(nums) {
    let res = new Array(nums.length);
    // 遍历所有的nums
    for (let i = 0; i < nums.length; i++) {
        let j = i - 1;
        // 自身楼可以看见
        let count = 1;
        let max = 0;
        // 寻找左边能看到的楼
        while(j >= 0) {
            if (nums[j] > max) {
                max = nums[j];
                count++;
            }
            j--;
        }
        j = i + 1;
        max = 0;
        // 寻找右边能看到的楼
        while(j < nums.length) {
            if (nums[j] > max) {
                max = nums[j];
                count++;
            }
            j++;
        }
        res[i] = count;
    }
    return res;
}
buildingsInView([5, 3, 8, 3, 2, 5]).forEach(ele => rl.output.write(ele.toString() + ' '));
