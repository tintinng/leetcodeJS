/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    // if (S.length <= 1) {
    //     return S;
    // }
    // let i = 0;
    // while (i < S.length) {
    //     if (S[i] === S[i + 1]) {
    //         S = S.slice(0, i) + S.slice(i + 2, S.length);
    //         i = i === 0 ? 0 : i - 1;
    //     } else {
    //         i++;
    //     }
    // }
    // return S;
    if (S.length <= 1) {
        return S;
    }
    let res = "";
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== S.charAt(i)) {
            stack.push(S.charAt(i));
        } else {
            stack.pop();
        }
    }
    for (let i = 0; i < stack.length; i++) {
        res += stack[i].toString();
    }
    return res;
  };

console.log(removeDuplicates("abbaca"))