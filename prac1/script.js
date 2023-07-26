let var1 = 10
let var2 = "kalp"
let var3 = true

function sumOfVariables(no1,no2){
    return no1+no2;
}


let ans1 = sumOfVariables(var1,var2)
console.log("first ans is : ", ans1);

let ans4 = sumOfVariables(var2,var1)
console.log("first ans in reverce : ", ans4);

let ans2 = sumOfVariables(var2,var3)
console.log("second ans is : ", ans2);

let ans5 = sumOfVariables(var3,var2)
console.log("second ans in reverce : ", ans5);

let ans3 = sumOfVariables(var3,var1)
console.log("third ans is : ", ans3);

let ans6 = sumOfVariables(var1,var3)
console.log("third ans in reverce : ", ans6);
