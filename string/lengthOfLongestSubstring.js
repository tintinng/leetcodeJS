/**
 * 滑动窗口 + hash
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 0;
    let map = new Map();
    let maxLen = 0;
    while (r < s.length) {
        while (r < s.length && !map.has(s[r])) {
            map.set(s[r], r)
            r++;
        }
        maxLen = Math.max(r - l, maxLen);
        // 更新左指针的位置
        let newL = map.get(s[r]) + 1;
        // 把老位置到新位置之间的所有字符在map中去掉
        for (let i=l; i<newL; i++) {
            map.delete(s[i]);
        }
        l = newL;
    }

    return maxLen;
};
