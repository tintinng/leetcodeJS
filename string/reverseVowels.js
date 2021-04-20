/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let i = 0, j = s.length - 1;
    let strs = s.split('');
    let sets = new Set(['a', 'e', 'i', 'o', 'u']);
    while (i < j) {
        while (!sets.has(strs[i]) && i < s.length) {
            i++;
        }
        while (!sets.has(strs[j]) && j >= 0) {
            j--;
        }
        if (i < j) {
            let temp = strs[j];
            strs[j] = strs[i];
            strs[i] = temp;
        }
        i++, j--;
    }
    return strs.join('');
};

reverseVowels('hello')