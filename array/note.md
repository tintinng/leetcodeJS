## 拷贝数组的方法
### slice(浅拷贝)
```javascript
let a = [1, 2, 3];
let b = a.slice(0, a.length);
```
### concat()(浅拷贝)
```javascript
let a = [1, 2, 3];
let b = a.concat();
```
### Array.from()(浅拷贝)
```javascript
let a = [1, 2, 3];
let c = Array.from(a);
```
### 收集运算符(浅拷贝)
```javascript
let a = [1, 2, 3];
let b = [...a];
```

## 会创建新数组的方法
### map
### filter

## 集合转数组
### Array.from()
- 从一个类数组或者可迭代对象浅拷贝一份数组
```javascript
// 字符串变为数组
Array.from('abcd') // ['a', 'b', 'c', 'd']

// set、map变为数组
Array.from(new Set([1, 2, 3])) // [1, 2, 3]

let map = new Map();
map.set(1, 'a');
map.set(2, 'b');
Array.from(map); // [[1, 'a'], [2, 'b']]
```

### ES6扩展操作符
```javascript
// 字符串变为数组
[...'abcd'] // ['a', 'b', 'c', 'd']

// set、map变为数组
[...new Set([1, 2, 3])] // [1, 2, 3]

let map = new Map();
map.set(1, 'a');
map.set(2, 'b');
[...map]; // [[1, 'a'], [2, 'b']]
```
## 创建二维数组的方法
### new Array() + for循环
```javascript
let chess = new Array(n);
for (let i = 0; i < n; i++) {
    chess[i] = new Array(n).fill(0);
}

// 注意这样是错误的：这样会让一数组的每一个项都指向新创建的这个  Array(n).fill(0)
let chess = new Array(n).fill(new Array(n).fill(0));
```

## 对象转数组
### Object.keys/Object.values/Object.entries
```javascript
let obj = {
    a : 1,
    b : 'q'
}
Object.keys(obj); // ['a', 'b']
Object.values(obj); // [1, 'q']
Object.entries(obj); // [['a', 1], ['b', 'q']]
```

## 数组拍平
```javascript
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "aaa" }];
// concat + 递归
function flat(arr) {
  let arrResult = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      arrResult = arrResult.concat(arguments.callee(item));   // 递归
      // 或者用扩展运算符
      // arrResult.push(...arguments.callee(item));
    } else {
      arrResult.push(item);
    }
  });
  return arrResult;
}
flat(arr)
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "aaa" }];
```