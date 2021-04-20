// 1、完全二叉树：用数组来表示，1~n的数在数组中的下标为0~n-1，因此每次取值的时候都要对下标减一
// 2、每个节点的值都大于等于（小于等于）左右子节点的值
class Heap {
    constructor(nums) {
        this.nums = nums;
    }
    // 建堆
    buildHeap() {
        let n = this.nums.length;
        // 从最后一个非叶子节点开始，从上往下堆化
        for (let i = Math.floor(n / 2); i >= 0; i--) {
            this.heapfy(n, i);
        }
    }
    // 从上往下堆化，取值的时候 -1
    heapfy(n, i) {
        while (true) {
            // 1、找到两个子节点中较大值并与之交换
            let maxPos = i;
            if (i * 2 <= n && this.nums[i * 2 - 1] > this.nums[i - 1]) {
                maxPos = i * 2;
            }
            if (i * 2 + 1 <= n && this.nums[i * 2] > this.nums[maxPos - 1]) {
                maxPos = i * 2 + 1;
            }
            // 父节点值最大则不用继续向下
            if (maxPos === i) {
                break;
            }
            this.swap(i - 1, maxPos - 1);
            // 2、一直向下
            i = maxPos;
        }
    }
    insert(num) {
        // 1、将元素插到结尾
        this.nums.push(num);
        let i = this.nums.length;
        // 2、从下往上堆化
        while (Math.floor(i / 2) > 0 && this.nums[Math.floor(i / 2) - 1] < this.nums[i - 1]) {
            this.swap(Math.floor(i / 2) - 1, i - 1);
            i = Math.floor(i / 2);
        }
    }
    // 删除堆顶元素
    poll() {
        let n = this.nums.length;
        if (n === 0) {
            return;
        }
        // 1、将堆顶元素去掉
        let num = this.nums.shift();
        // 2、把最后一个元素放到堆顶，再从上到下堆化
        this.nums.unshift(this.nums.pop());
        this.heapfy(n, 1);

        return num;
    }
    // 排序
    sort() {
        // 未排序的堆的元素个数
        let k = this.nums.length;
        while (k > 1) {
            // 交换堆顶和最后一个元素
            this.swap(k - 1, 0);
            k--;
            // 堆化
            this.heapfy(k, 1);
        }
    }
    swap(i, j) {
        let temp = this.nums[i];
        this.nums[i] = this.nums[j];
        this.nums[j] = temp;
    }
}

let h = new Heap([7, 5, 19, 8, 4, 1, 20, 13, 16])
h.buildHeap();
h.insert(33);
console.log(h.nums);
h.insert(17);
console.log(h.nums);
// h.sort();
// console.log(h.nums);
// console.log(h.nums);
// console.log(h.poll());
// console.log(h.poll());
// console.log(h.nums);