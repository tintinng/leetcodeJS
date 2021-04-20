const readline = require('readline')

let rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rd.on('line', function(params) {
    console.log(params);
})