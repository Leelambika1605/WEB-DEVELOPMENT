// this keyword in js
 const student = {
      name :"leela R",
      phy : 22,
      chem : 76,
      bio : 34,

      getAvg(){
      console.log(this);
      let avg = (this.eng + this.chem + this.bio) / 3;
      console.log(`${this.name} avg marks = ${avg}`);

}
 };


 student.getAvg();


 function getAvg(){
      console.log(this);
 }


 //try and catch


 try {
      console.log(a);
 }catch{
      console.log("variable is not found!");
 }
 console.log("hello");