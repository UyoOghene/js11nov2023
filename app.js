// Example 1
// function doubleArr(arr){
//     const result =[]

//     for(let num of arr){
//         var double=num*2;
//         result.push(double);

//     }
//     console.log(double);
//     return result;
// }
// console.log(doubleArr([20,22,254]));

// Function expressions:
// Example 1

// function add(x,y){
//     return x+y;
// }
// // alternatively
// const sum= function(x,y){
//     return x+y;
// }

// // also 
// const product =function multiply(x,y){
//     return x*y;
// }

// const divide=function divi(x,y){
//     return x/y;
// }

// const operation = [add,sum,product,divide];
// console.log(operation);

// for (let func of operation){
//     let result =func(30,5);
//     console.log(result)
// }

// const thing = {
//     doSomething:product
// }
// console.log(thing.doSomething(2,4))


// Higher order functions

function callThreetimes(f,d){
    f();
    f();
    f();
    d();
    d();
    d();
}
function cry(){
    console.log('i am so sad');
}

function rage(){
    console.log('angry');
}
// console.log(callThreetimes(cry,rage));


function repeatNtimes(action,num){
    for (let i=0;i<num;i++){
        action();
    }
}
// console.log(repeatNtimes(rage,3));


function pickone(f1,f2){
    let rand =Math.random();
    if(rand<0.5){
        f1();}
        else {
         f2();
        } 
    }

    pickone(cry,rage);
