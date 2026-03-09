//method

const calculator = {
      add : function(a , b){
            return a + b ;

      },
      sub : function(a , b){
            return a - b;
      },
      mult : function(a ,b){
            return a * b;
      }

};
calculator.add;
calculator.add(1 , 2);
calculator.sub(1 , 2);
calculator.mult(1 , 2);


//shorthand methos
const calculator1 ={
      add(a,b){
            return a+b;
      },
      diff(a,b){
            return a-b;
      },
      mult(a,b){
            return a*b;
      }

};
