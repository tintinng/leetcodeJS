/**
 * 1、dfs遍历二维数组，每次搜索完一个岛屿将1变为0；搜索次数即为岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length == 0) {
        return 0
    }
    let lineLength = grid.length
    let rowLength = grid[0].length
    let res = 0
    let dfs = function(x, y) {
        if(grid[x][y] == '0') {
            return
        }
        grid[x][y] = '0'
        if(x-1 >= 0) {
            dfs(x-1, y)
        }
        if(y+1 < rowLength) {
            dfs(x, y+1)
        }
        if(x+1 < lineLength) {
            dfs(x+1, y)
        }
        if(y-1 >= 0) {
            dfs(x, y-1)
        }
        return
    }
    for(let i=0; i<lineLength; i++) {
        for(let j=0; j<rowLength; j++) {
            if(grid[i][j] == '1') {
                res++
                dfs(i, j)
            }
        }
    }
    return res
};