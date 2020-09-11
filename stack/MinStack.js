var MinStack = function() {
    this.stack = []
    this.min_stack = []
}

MinStack.prototype.push = function (x) {
    this.stack.push(x)
    if(x <= this.min_stack[this.min_stack.length-1] || this.min_stack.length === 0) {
        this.min_stack.push(x)
    }
}

MinStack.prototype.pop = function () {
    let out = this.stack.pop()
    if (this.min_stack[this.min_stack.length-1] === out){
        this.min_stack.pop()
    }
}

MinStack.prototype.top = function () {
    return this.stack[this.stack.length-1]
}

MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length-1]
}