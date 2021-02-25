/**
 * @param {string} s
 * @return {number}
 */
class Automaton {

    constructor() {
        this.state = "start"
        this.sign = 1;
        this.res = 0;
        // 状态转移表 [状态, [空白符, 符号, 数字, 其他]]
        this.map = new Map([
            ["start", ["start", "signed", "in_number", "end"]],
            ["signed", ["end", "end", "in_number", "end"]],
            ["in_number", ["end", "end", "in_number", "end"]],
            ["end", ["end", "end", "end", "end"]],
        ])
    }

    getChar(c) {
        if (c === " ") {
            return 0;
        } else if (c === "+" || c === "-") {
            return 1;
        } else if (c - 0 >= 0 && c - 0 <= 9) {
            return 2;
        } else {
            return 3;
        }
    }
    
    translate(c) {
        // 状态转换
        this.state = this.map.get(this.state)[this.getChar(c)]

        if (this.state === "in_number") {
            this.res = this.res * 10 + (c - 0);
            // 限制在范围内
            if (this.sign === 1) {
                this.res = Math.min(2 ** 31 - 1, this.res);
            } else {
                this.res = Math.min(-((-2) ** 31), this.res);
            }
        } else if (this.state === "signed") {
            this.sign = c === '+' ? 1 : -1;
        }
    }
}

var myAtoi = function(s) {
    let automaton = new Automaton()
    for (const c of s) {
        automaton.translate(c)
    }
    return automaton.sign * automaton.res;
};

let s1 = "4193 with words"
let s2 = "words and 987"
let s3 = "    -45"
let s4 = "-91283472332"
let s5 = "9999991283472332"
console.log(myAtoi(s5));