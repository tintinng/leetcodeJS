/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    for (let i=0; i<4; i++) {
        if (v1[i]) {
            // 去掉前导 0
            v1[i] = parseInt(v1[i]);
        } else {
            v1.push(0);
        }
        if (v2[i]) {
            // 去掉前导 0
            v2[i] = parseInt(v2[i]);
        } else {
            v2.push(0);
        }
        if (v1[i] > v2[i]) {
            return 1;
        } 
        if (v1[i] < v2[i]){
            return -1;
        }
    }
    return 0;
};