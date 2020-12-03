const fs = require("fs");
var text = fs.readFileSync("src/day3/input.txt").toString('utf-8').trim();
var lineArr = text.split("\n");

let part1 = findTrees(1,3);
let part2 = findTrees(1,1) * findTrees(1,3) * findTrees(1,5) * findTrees(1,7) * findTrees(2,1);

function findTrees(down, right){
    let count = 0;
    let k = 0;
    for(var i = 0; i<lineArr.length; i+=down){
        if(lineArr[i].charAt((k*right)%lineArr[i].length) == '#'){
            count++;
        }
        k++;
    }
    return count;
}

console.log("Part 1: " + part1);
console.log("Part 2: " + part2);