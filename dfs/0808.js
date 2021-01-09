/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    let arr = S.split('');
    arr.sort();
    let len = S.length;
    let used = new Array(len).fill(0);
    let res = [];
    let dfs = function (str, k) {
        if (k === len) {
            res.push(str.join(''));
            return;
        }
        for (let i = 0; i < len; i++) {
            if (i - 1 >= 0 && !used[i - 1] && arr[i - 1] === arr[i]) {
                continue;
            }
            if (!used[i]) {
                used[i] = 1;
                str.push(arr[i]);
                dfs(str, k + 1);
                str.pop();
                used[i] = 0;
            }
        }
    }
    dfs([], 0);

    return res;
};

console.log(permutation('qqe'));