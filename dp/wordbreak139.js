/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let sets = new Set(wordDict)
    let n = s.length
    // dp[i]表示以wordDict[i]结尾的子串能否分解
    let dp = new Array(n).fill(false)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            // 边界问题
            if ((j == 0 || dp[j - 1]) && sets.has(s.substring(j, i + 1))) {
                dp[i] = true
                break;
            }
        }
    }
    return dp[n - 1]
};
// let s = "leetcode"
let s = "a"
// let wordDict = ["leet", "code"]
let wordDict = ["a"]
wordBreak(s, wordDict)