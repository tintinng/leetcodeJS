/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // 判断能否从word1转换到word2
    let ladderable = function(word1, word2) {
        let count = 0;
        for (let i = 0; i< word1.length; i++) {
            if (word1[i] !== word2[i]) {
                count ++;
            }
        }
        return count === 1;
    }
    
    let queue = [];
    let used = Array(wordList.length).fill(0);
    let level = 1;
    queue.push(beginWord);
    while (queue.length) {
        let queueLength = queue.length;
        // 遍历队列
        for (let k = 0; k < queueLength; k++) {
            let curWord = queue.shift();
            // 遍历wordList
            for (let i = 0; i < wordList.length; i++) {
                if (!used[i] && ladderable(curWord, wordList[i])) {
                    if (wordList[i] === endWord) {
                        return level + 1;
                    }
                    queue.push(wordList[i]);
                    used[i] = 1;
                }
            }
        }
        level++;
    }
    return 0;
};