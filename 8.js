//Array indexOf includes
let cars = ["audi ", "bmw" , "merceidies" , "Xuv" ];
cars.indexOf("bmw");

let marks = [99,90,98,100,67,89];
marks.indexOf(100);
marks.includes(100);

//concatination
cars.concat(marks);

//reverse
cars.reverse();
marks.reverse();


//slice method
cars.slice();
cars.slice(2);
cars.slice(2,3);
cars.slice(-2)

//splice method
marks.splice(2);
marks.splice(0,1);
let marks1 = [99,90,98,100,67,89];
marks1.splice(0 , 1,"100" , "67");