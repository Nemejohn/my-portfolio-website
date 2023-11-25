lists = [5,10,15,20];
let first_row = [4,1,2,2,3,2,lists];
let second_row = [4,1,1,2,2,1];
let empty = [];

let x = first_row[6].slice(1,3);

for( let i = 0; i < first_row.length; i++ ){
    let y = first_row[i] * second_row[i];
}
console.log(y);

//console.log(x);
//let y = second_row[3];
//console.log(y);


let third_row = [4,1,2,2,3,2];
let fourth_row = [4,1,1,2,2,1];
let empty1 = []

let value = 0
let result
for(let i = 0; i < first_row.length; i = 1+i){
    let y = first_row[i] * second_row[i]

    result = y + value
    value = result 
}
console.log(value)
