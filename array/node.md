## 拷贝数组的方法
### slice
```javascript
let a = [1, 2, 3];
let b = a.slice(0, a.length);
```
### concat()
```javascript
let a = [1, 2, 3];
let b = a.concat();
```
### ES6
```javascript
let a = [1, 2, 3];
let b = [...a];
let c = Array.from(a);
```