//Arrays

let student = ["leela R" , "Navanitha R" ,"Sonisha R" ];
let marks = [99 , 98 , 100];

//declaration of an array or empty array
let newArray = [];

//Accessing Array
console.log(student[0]);

//mixed Array
let info = ["Leela R" , "Navanitha R" ,"Sonisha R" , 3,5,6];

//length of an array
console.log(info.length);
console.log(student.length);
console.log(info[0][0]);


//Ararys are mutable
let fruits = ["mango" , "Apple" , "Cherry"];
console.log(fruits);
console.log(fruits[0] = "banana");
console.log(fruits);

//arrays Method
//push , pop , unshift , shift
let cars = ["audi ", "bmw" , "merceidies" , "Xuv" ];
cars.push("Toyota");
cars.pop();
cars.unshift("Toyato"); // add element at starting
cars.shift(); // deleting elt at first