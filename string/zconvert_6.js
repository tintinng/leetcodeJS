/**
 *  
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    let str = '';
    for (let i=0; i<numRows; i++) {
        // 第一行和最后一行是一个等差数列
        if (i==0 || i==numRows-1) {
            for (let k=i; k<s.length; k += 2*(numRows-1)) {
                str += s[k];
            }
        } else { // 其他行是两个等差数列
            for (let j=i,k=2*(numRows-1)-i; j<s.length || k<s.length; j += 2*(numRows-1), k += 2*(numRows-1)) {
                if(j < s.length) {
                    str += s[j];
                }
                if(k < s.length) {
                    str += s[k];
                }
            }
        }
    }
    return str;
};