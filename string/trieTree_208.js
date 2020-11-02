/**
 * 定义Trie树的数据结构(构造函数)
 * Initialize your data structure here.
 */
var Trie = function() {
    // 每个节点都有26个子节点
     this.sons = {};
    // 判断当前节点是否为尾节点
     this.isEnd = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let p = this;
    for (let i=0; i<word.length; i++) {
        if (p.sons[word[i]]) {
            p = p.sons[word[i]];
        } else {
            p.sons[word[i]] = new Trie();
            p = p.sons[word[i]];
        }
    }
    p.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let p = this;
    for (let i=0; i<word.length; i++) {
        if (p.sons[word[i]]) {
            p = p.sons[word[i]];
        } else {
            return false;
        }
    }
    return p.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let p = this;
    for (let i=0; i<prefix.length; i++) {
        if (p.sons[prefix[i]]) {
            p = p.sons[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */