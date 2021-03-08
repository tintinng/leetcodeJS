/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let i = 1;
    let carry = 0;
    let res = "";
    while (i <= num1.length && i <= num2.length) {
        let a = Number(num1[num1.length - i]);
        let b = Number(num2[num2.length - i]);
        res = ((a + b + carry) % 10).toString() + res;
        carry = Math.floor((a + b + carry) / 10);
        i++;
    }
    while (i <= num1.length) {
        let add = Number(num1[num1.length - i]);
        res = ((add + carry) % 10).toString() + res;
        carry = Math.floor((add + carry) / 10);
        i++;
    }
    while (i <= num2.length) {
        let add = Number(num2[num2.length - i]);
        res = ((add + carry) % 10).toString() + res;
        carry = Math.floor((add + carry) / 10);
        i++;
    }

    return carry === 0 ? res : '1' + res;
};

console.log(addStrings("111232323", "9909"));