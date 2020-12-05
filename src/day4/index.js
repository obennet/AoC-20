const fs = require("fs");
var text = fs.readFileSync("src/day4/input.txt").toString('utf-8').trim();
var lineArr = text.split("\n\n");



let arr = [];
let valid1 = 0;
let valid2 = 0;
let fields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];

for(var i = 0; i<lineArr.length;i++){
    arr[i] = lineArr[i].split(/[\s:]+/);
    
    if(containsAll(fields, arr[i])){
        let isValid = true;
        valid1++;
        for(var k = 0; k < arr[0].length; k+=2){
            
            if(arr[i][k] == 'byr'){
                if(!(arr[i][k+1].length==4 && parseInt(arr[i][k+1]) >= 1920 && parseInt(arr[i][k+1]) <=2002)){
                    isValid = false;
                    break;
                }
            }
            else if(arr[i][k] == 'iyr'){
                if(!(arr[i][k+1].length==4 && parseInt(arr[i][k+1]) >= 2010 && parseInt(arr[i][k+1]) <= 2020)){
                    isValid = false;
                    break;
                }
            }
            else if(arr[i][k] == 'eyr'){
                if(!(arr[i][k+1].length==4 && parseInt(arr[i][k+1]) >= 2020 && parseInt(arr[i][k+1]) <= 2030)){
                    isValid = false;
                    break;
                }
            }
            
            else if(arr[i][k] == 'hgt'){
                let unit = arr[i][k+1].slice(-2);
                let value = parseInt(arr[i][k+1].slice(0, -2));
                console.log(value + " - " + unit);
                if(unit == 'cm'){
                    if(!(value >= 150 && value <= 193)){
                        isValid = false;
                        break;
                    }
                }
                else if(unit == 'in'){
                    if(!(value >= 59 && value <= 76)){
                        isValid = false;
                        break;
                    }
                }
                else{
                    isValid = false;
                    break;
                }
                
            }
            
            
            else if(arr[i][k] == 'hcl'){
                if(!(/^#[A-F0-9]{6}$/i).test(arr[i][k+1])){
                    
                    isValid = false;
                    break;
                        
                }
            }
            
            else if(arr[i][k] == 'ecl'){
                let colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                if(!(containsAny(colors, arr[i][k+1]))){
                    isValid = false;
                    break;
                }
            }
            
            else if(arr[i][k] == 'pid'){
                if(!((/^\d+$/.test(arr[i][k+1]) && arr[i][k+1].length == 9))){
                    isValid = false;
                    break;
                }
            }
        }
        if(isValid) valid2++;
    }
       
}

function containsAll(fields, arr){
    for(var i = 0; i<fields.length; i++){
        if(!arr.includes(fields[i])) return false;
    }
    return true;
}

function containsAny(fields, arr){
    for(var i = 0; i<fields.length; i++){
        if(arr.includes(fields[i])) return true;
    }
    return false;
}
 
console.log("Part 1: "+ valid1);
console.log("Part 2: "+ valid2);
