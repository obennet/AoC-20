const fs = require("fs");
var text = fs.readFileSync("src/day2/input.txt").toString('utf-8').trim();
var textByLine = text.split("\n");

let array = [];
let count = 0;
let count2 = 0;

for(let i = 0; i < textByLine.length; i++){

    array[i] = textByLine[i].split(/[\s:-]+/);
    let min = array[i][0];
    let max = array[i][1];
    let char = array[i][2];
    let password = array[i][3];
    let chcount = 0;

    for(let j = 0; j < password.length; j++){
        if(password.charAt(j) == char) chcount++;
    }
    
    if(chcount >= min && chcount <= max) count++;
    if(password.charAt(min-1) == char && password.charAt(max-1) != char || password.charAt(min-1) != char && password.charAt(max-1) == char) count2++;

}


console.log("Part1 Valid passwords: " + count);
console.log("Part2 Valid passwords: " + count2);
