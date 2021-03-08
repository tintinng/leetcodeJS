function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.');
    let obj = oNamespace;
    let i = 0;
    while (i < arr.length) {
        if (obj[arr[i]] && typeof obj[arr[i]] === 'object') {
            obj = obj[arr[i]];
            i++;
        } else {
            break;
        }
    }
    while (i < arr.length) {
        // obj[arr[i]] = Object.create(null);
        obj[arr[i]] = {};
        obj = obj[arr[i]];
        i++;
    }
    return oNamespace;
}

console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'));