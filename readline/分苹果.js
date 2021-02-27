const { lutimes } = require("fs")
const readline = require("readline")

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let rows = []
let res;

// 确定输入两行
rl.on("line", function(input) {
    rows.push(input)
    if (rows.length >= 2) {
        // console.log(rows)
        let n = rows[0];
        let nums = rows[1].split(' ');
        let sum = 0;
        for (let i = 0, len = nums.length; i < len; i++) {
            nums[i] = Number(nums[i]);
            sum += nums[i];
        }
        // 平均数
        let svg = sum / n;
        // 1-不是整数
        if (!Number.isInteger(svg)) {
            res = -1;
            rl.close();
        }
        // 2-平均数和数组的奇偶性
        if (svg % 2 === 0) {
            // 偶数
            for (let num of nums) {
                // 存在奇数则退出返回-1
                if (num % 2 === 1) {
                    res = -1;
                    rl.close();
                }
            }
        } else {
            // 奇数
            for (let num of nums) {
                // 存在偶数则退出返回-1
                if (num % 2 === 0) {
                    res = -1;
                    rl.close();
                }
            }
        }
        // 取比平均数大的值 /2
        sum = 0;
        for (let num of nums) {
            if (num > svg) {
                sum += (num - svg);
            }
        }
        res = sum / 2;
        rl.close()
    }
})
rl.on("pause", function() {
    console.log(res);
})