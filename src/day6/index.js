const fs = require("fs");
var text = fs.readFileSync("src/day6/input.txt").toString('utf-8').trim();
var data2 = text.split("\n\n").map(x => x.replace(/\n/g, ' ').concat(' '));
var data1 = text.split("\n\n").map(x => x.replace(/\n/g, ''));

let yesCount = 0;

for(let i = 0; i < data1.length; i++){
    const noDupes = new Set(data1[i]);
    yesCount += noDupes.size;

}
console.log(data2);

let totAllCom = 0;

for(let i = 0; i < data2.length; i++){
    let allCom = 0;
    let dupes = new Map();
    let count = 0;
    for(let j = 0; j < data2[i].length; j++){
        if(dupes.has(data2[i].charAt(j))){
            count = dupes.get(data2[i].charAt(j)) + 1;
        }
        else{
            count = 1;
        }
        dupes.set(data2[i].charAt(j), count);
    }

    for(const [key, value] of dupes){
        if(value == dupes.get(' ')){
            allCom++;
        }
    }
    allCom--;
    
    totAllCom += allCom;
}

console.log("Part 1: " + yesCount);
console.log("Part 2: " + totAllCom);