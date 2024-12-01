// Normal Function

/*
function f(a,b){
    const sum = a+b;
    return sum;
}
console.log(f(2,4));

*/

// Annynonums function

/*
let sum = function(a,b){
    const c= a+b;
    return c;
}
console.log(sum(2,7))

*/

// Immediate Invoked Function
/*

let sum = function(a,b){
    const c= a+b;
    return c;
}(4,90);
console.log(sum);

*/

// Arrow function

const sum = (a,b)=>{
    const c=a+b;
    return c;
}
console.log(sum(5,90));