/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) { 
    let str = num.toString(2);
    let arr = [];
    let i = str.length - 1;
    while (i >= 0 && (i - 1) >= 0) {
        arr.push(str.charAt(i - 1));
        arr.push(str.charAt(i));
        i -= 2
    }
    if (i >= 0 && (i - 1) < 0) {
        arr.push('0');
        arr.push(str.charAt(i));
    }
    return parseInt(arr.reverse().join(''), 2)
};

console.log(exchangeBits(75))