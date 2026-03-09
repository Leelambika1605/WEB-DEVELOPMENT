//Arrow function

const sum = (a , b) => { //name kess function
      console.log(a+b);
}

sum(2,3);

let cube =(a) => {
      console.log(a*a*a);
}

cube(2);

//Arrow function
const mul = (a,b) => (
      a*b
);

mul(3,4);

//time out function

//setTimeout(func , timeout)

console.log("hi there!");
setTimeout( () => {
      console.log("Apna college");
}, 4000);

console.log("Welocome to");

setTimeout(() => {
      console.log("heyyy stop!!");
}, 5000);
