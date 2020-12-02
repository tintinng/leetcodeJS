/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    // 判断当前字符串是否是有效的括号对
    let isValid = function (str) {
        let balance = 0;
        for (c of str) {
            if (c === '(') {
                balance++;
            } else {
                balance--;
            }
            if (balance < 0) {
                return false;
            }
        }
        return balance === 0;
    }
    let backtrace = function (i, str) {
        if (i === n) {
            if (isValid(str)) {
                res.push(new String(str));
            }
            return;
        }
        backtrace(i + 1, str + '(')
        backtrace(i + 1, str + ')')
    }
    backtrace(0, "");
    return res;
};

generateParenthesis(3);