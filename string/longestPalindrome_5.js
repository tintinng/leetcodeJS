/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length == 1) {
        return s;
    }
    let longestStr = s[0];
    // 奇数的最大回文串(遍历中心点)
    for (let i=0; i<s.length; i++) {
        let l = i;
        let r = i;
        while (s[l] == s[r] && l >= 0 && r < s.length) {
            l--, r++;
        }
        // 越过最大回文串需要返回
        l++, r--;
        if (r - l + 1 > longestStr.length) {
            longestStr = s.slice(l, r+1);
        }
    }
    // 偶数的最大回文串
    for (let i=1; i<s.length; i++) {
        let l = i-1;
        let r = i;
        while (s[l] == s[r] && l >= 0 && r < s.length) {
            l--, r++;
        }
        // 越过最大回文串需要返回
        l++, r--;
        if (r - l + 1 > longestStr.length) {
            longestStr = s.slice(l, r+1);
        }
    }

    return longestStr;
};