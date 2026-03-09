let todo = [];

let p = prompt("please enter your request:");

while(true){
      if(p=="quit"){
            console.log("quitting app");
            break;
      }
      if(p =="list"){
            console.log("---------");
            for(task of todo){
                  console.log(task);
            }
            console.log("----------");
      }else if(p == "add"){
            let task =  prompt("Please enter the task you want to add");
            todo.push(task);
            console.log("task added");

      }

      p = prompt("please enter your request");
      
}