

//lexical scope

function outerFunc(){
      
      function innerFunc(){

            let a = 10;
            console.log(x);
            console.log(y);
      }
      let x = 5;
      let y = 6;
      console.log(a); // here you get error bcz lexical scope
      innerFunc();
}

//Function Expression
const sum = function(a , b){  //name less function
      return a+b;
}
sum(2,3); //using variable name can access this function


sum = function(a , b , c){ //here sum get updated
    return a+b+c;
}
sum(3,4,1);


//Higher order function
//  A function taking another function as an argument
function multipleGreet(func , count){
      for(let i = 1; i<=count; i++){
            func();
      }
}
let greet = function(){
      console.log("hello");
}
multipleGreet(greet , 200);

// directly calling function as an argument
multipleGreet(function() {console.log("namsthe")}, 1000);

