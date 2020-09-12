/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for(let i=0; i<s.length; i++) {
        let ch = s.charAt(i)
        if(ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch)
        }
        if(stack.length == 0) {
            return false;
        }
        if(ch == ')' && stack.pop() !== '(') {
            return false
        }
        if(ch == ']' && stack.pop() !== '[') {
            return false
        }
        if(ch == '}' && stack.pop() !== '{') {
            return false
        }
    }

    return stack.length === 0
};

// 建立一个map,栈底放一个‘哑元素’
var isValid2 = function(s) {
    let map = new Map()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    // 栈底元素，不用给栈为空的时候另作处理
    map.set('?','?')
    let stack = []
    stack.push('?')
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i])) {
            stack.push(s[i])
        } else if(map.get(stack.pop()) !== s[i]) {
            return false
        }
    }

    return stack.length === 1
}