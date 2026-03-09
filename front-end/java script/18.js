//Scope

//function scope
let sum = 54;  //global scope
function calSum(a , b){
    let sum = a+b;
    console.log(sum); //Function scope
}

console.log(calSum(1,2));


//block scope

{
      const a = 25;
}
console.log(a);

//block scope using var
{
      var a =30;
}
console.log(a);


//Example

let age = 29;
if(age >= 10){
      let str = "adult";
}
console.log(str);