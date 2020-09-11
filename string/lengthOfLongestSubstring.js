/**
 * 滑动窗口
 * 1、窗口内用map保存索引
 * 2、使用set保存i到j中的节点，set可以保证不含重复元素
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let maxLen = 0;
    for(let i=0,j=0; j<s.length; j++) {
        if(!map.has(s[j])) {
            map.set(s[j], j);
        }else {
            i = Math.max(map.get(s[j]) + 1, i);
            // 更新s[j]的位置
            map.set(s[j], j);
        }
        maxLen = Math.max(j-i+1, maxLen);
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("tmmzuxt"))