const fs = require("fs");
var text = fs.readFileSync("src/day5/input.txt").toString('utf-8').trim();
var data = text.split("\n");

let row;
let col;
let seats = [];

for(let i = 0; i < data.length; i++){
    row = findSeat(0, 127, data[i], 0);
    col = findSeat(0, 7, data[i], 7);
    seats.push(row * 8 + col);

}

function findSeat(lo, hi, arr, i){
    while(lo<hi){
        switch(arr[i]){
            case 'F': case 'L':
                hi = parseInt(lo + (hi-lo)/2);
                break;
            case 'B': case 'R':
                lo = parseInt(lo + (hi-lo)/2+1);
                break;
        }
        i++;
    }
    return lo;
}

function findMySeat(seats){
    seats.sort(function(a, b) {
        return a - b;
      });

    for(let i = 0; i < seats.length; i++){
        if(seats[i+1] - seats[i] > 1){
            return seats[i]+1;
        }
    }
}

console.log("Part 1: " + Math.max( ... seats));
console.log("Part 2: " + findMySeat(seats));
