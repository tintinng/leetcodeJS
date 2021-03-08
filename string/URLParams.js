function getUrlParam(sUrl, sKey) {
    let arr = sUrl.split('?');
    if (arr.length === 1) {
        return sKey === undefined ? {} : '';
    }
    let queryStr = arr[1].split('#')[0];
    let pairs = queryStr.split('&');
    if (!sKey) {
        let obj = {};
        for (let pair of pairs) {
            let temp = pair.split('=');
            if (!obj[temp[0]]) {
                obj[temp[0]] = temp[1];
            } else if (Array.isArray(obj[temp[0]])) {
                obj[temp[0]].push(temp[1]);
            } else {
                let origin = obj[temp[0]]
                obj[temp[0]] = [origin, temp[1]];
            }
        }
        return obj;        
    } else {
        let res = [];
        for (let pair of pairs) {
            let temp = pair.split('=');
            if (temp[0] === sKey) {
                res.push(temp[1]);
            }
        }
        if (res.length > 1) {
            return res;
        } else {
            return res[0] || '';
        }
    }   
}

let r = getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe");
console.log(r);
console.log(r.key.join('') === '1234');