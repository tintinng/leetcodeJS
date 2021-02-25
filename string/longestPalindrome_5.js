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

/**
 * @param {string} s
 * @return {string}
 */
/*
var longestPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
        return s
    }
    let maxLen = 0;
    let maxStart = -1, maxEnd = -1;
    // 遍历所有中心点
    for (let i = 0; i < s.length; i++) {
        let l = i - 1, r = i + 1;
        let curLen = 1;
        while (l >= 0 && r < s.length) {
            if (s[l] === s[r]) {
                curLen += 2;
                l--, r++;
                if (curLen > maxLen) {
                    maxStart = l + 1;
                    maxEnd = r - 1;
                    maxLen = curLen;
                }
                continue
            }
            break;
        }
    }
    for (let i = 0; i < s.length; i++) {
        let l = i, r = i + 1;
        let curLen = 0;
        while (l >= 0 && r < s.length) {
            if (s[l] == s[r]) {
                curLen += 2;
                l--, r++;
                if (curLen > maxLen) {
                    maxStart = l + 1;
                    maxEnd = r - 1;
                    maxLen = curLen;
                }
                continue
            }
            break;     
        }
    }

    return maxStart === -1 ? s[0] : s.substring(maxStart, maxEnd + 1);
};
*/
console.log(longestPalindrome("abcc"))
