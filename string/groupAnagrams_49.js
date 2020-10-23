/**
 *  字母异位词内字母排序的结果相同
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 哈希表,键为内字母排序后的字符串，值为对应异位词数组
    let map = new Map();
    strs.forEach((ele) => {
        //  字符串内字母排序 O(m*logm)
        let str = Array.from(ele).sort().join('');
        if (!map.has(str)) {
            let arr = [];
            arr.push(ele);
            map.set(str, arr);
        } else {
            map.get(str).push(ele);
        }
    })

    return Array.from(map.values());
};