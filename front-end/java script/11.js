//loops with Arrays
let fruits1 = ["mango" , "apple", "banana","litchi","orange"];

for(let i=0;i<fruits1.length;i++){
    console.log(i,fruits1[i]);
}

//loops with Arrays
let fruits = ["mango" , "apple", "banana","litchi","orange"];

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
//loops with nested arrays
let heroes = [["iron man","spider man","thor"],["superman","wonder woman","flash"]];
for(let i=0;i<heroes.length;i++){
    console.log(`list #${i}`);
    for(let j=0; j<heroes[i].lengthl;j++){
        console.log(heroes[i][j]);
    }
}

//for of loop
let fruits11 = ["mango" , "apple", "banana","litchi","orange"];

for(fruit of fruits11){
      console.log(fruit);
}