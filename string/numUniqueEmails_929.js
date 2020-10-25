/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    for (let i=0; i<emails.length; i++) {
        let arr = emails[i].split('@');
        // @符号之前的部分
        let pre = (arr[0].split('+'))[0].split('.').join('');
        let str = pre + '@' + arr[1];
        if (!set.has(str)) {
            set.add(str)
        }
    }

    return set.size;
}