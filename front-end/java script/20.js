// Higher order function

function oddEvenTest(request){
      if(request == "odd"){
            return function(n){
                  console.log(!(n%2)==0);
            }
      }else if(request == "even"){
            return function(n){
                  console.log(n%2==0);
            }
      }else{
            console.log("wriong Entry!")
      }
}


let odd = function(n){
      console.log(!(n%2 == 0 ));
}

let even = function(n){
      console.log(n%2 == 0);
}
 let request = "odd";

 let func = oddEvenTest(request);