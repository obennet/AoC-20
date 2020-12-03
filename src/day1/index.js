var fs = require("fs");
var text = fs.readFileSync("src/day1/input.txt").toString('utf-8');
var textByLine = text.split("\n").map(x => parseInt(x));

var product2 = 0;
var product3 = 0;

for(var i = 0; i<textByLine.length; i++){
    for(var j = 1; j<textByLine.length; j++){
        for(var x = 2; x<textByLine.length; x++){
            if(textByLine[i] + textByLine[j] + textByLine[x]== 2020){
                product3 = textByLine[i]*textByLine[j]*textByLine[x];
                break;
                }
        }
        if(textByLine[i] + textByLine[j] == 2020){
            product2 = textByLine[i]*textByLine[j];
            break;
        }
    }
}

console.log("Part 1: " + product2);
console.log("Part 2: " + product3);