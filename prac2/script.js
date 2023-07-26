let array = [1,"kalp",true,4.55,5]

console.log("length of the array is : ", array.length);

let number1 = array[2];
console.log("Access elements using indexing : ", number1);

// Use array methods like push() ,pop(), shift(), unshift(), join(),
// delete(),concate(),flat(),splice() and slice() to modify the array.

array.push(10);
console.log("push 10 : ",array);


array.pop();
console.log("pop 10: ",array);

array.unshift(10);
console.log("unshift : ",array);

array.shift();
console.log("shift 10 : ",array);



let array2 = array.join(' ');
console.log("join : ", array2);

let array3 = [6,7,8];
let array4 = array.concat(array3);

delete array3[2];
console.log("delete : ",array3);

console.log("concate : ", array4);


const arr1 = [0, 1, 2, [3, 4]];
console.log("flat1 : ",arr1.flat());
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log("flat2 : ", arr2.flat(2));


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("slice : ", animals.slice(2));
console.log("slice : ",animals.slice(2, 4));


let obj = {
    name : "kalp pandya",
    id : "21CE084",
    college : "CSPIT",
    cource : "BTech CE"
}

function print(obj){
    console.log(obj.name);
    console.log(obj.id);
    console.log(obj.college);
    console.log(obj.cource);
}

print(obj);