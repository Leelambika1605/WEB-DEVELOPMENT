//for loop
for(let i=0;i<=5;i++){
    console.log(i);
    
}
//odd numbers
for(let i=1;i<=15;i++){
    if(i%2 != 0){
        console.log(i);
    }
}


//even number
for(let  i=1;i<=15;i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//for loop even number backward
for(let i=10;i>=2;i=i-2){
    console.log(i);
}

//infinite loops
for(let i=1;i>=0;i++){
   
}

for(let ii=1 ; i<=5;i--){
        
    }

for(let i=1; ; i++){

    }

//multiplication table of 5
for(let i=5;i<=50;i=i+5){
    console.log(i);
    
}

//nested for loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}

//while loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}


let favMovie = "Avatar";
let guess = prompt("Guess my favorite movie:");
while ((guess != favMovie) && (guess !="quit")){
     guess = prompt("wrong guess. please try again!");
     if(guess == "quit"){
        console.log("you quit!");
     }
    

}