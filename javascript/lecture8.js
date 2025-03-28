// classes and objects
class Human{
    age=13;
    name="Utkarsh";
    #password=1234; // this is private variable
      getmyname(){
        console.log("My name is "+ this.name);
        console.log("My age is this and password is  "+this.#password);  
      }

    // constructor
    constructor(newage,newname,newpassword){
      this.age=newage;
      this.name=newname;
      this.#password=newpassword
    }

      // getters and setter for accessing private members

      // getter
      get getpassword(){
        return this.#password;
      }
      // setter
      set setpassword(value){
        this.#password=value;
        return this.#password;
      }

}



let obj1=new Human();
console.log(obj1.age);
obj1.getmyname();
console.log(obj1.getpassword);
obj1.setpassword=234567;;
console.log(obj1.getpassword);

// using constructor
let obj2= new Human(24,"Utkarsh Maheshwari","9876");
console.log(obj2.age);
console.log(obj2.name);
console.log(obj2.getpassword);




// default parameters
function fullname(fname="Thomas",lname="lue"){
  console.log("My name is "+fname +" "+lname);

}
fullname("Utkarsh","Maheshwari");
fullname();

// if i pass null and undefiened , if i pass null then it will taks null and if i pass undefiened then it will take defaut value

function findage(age=35){
  console.log("My age is "+age);
}
findage(null);
findage(undefined);  // here undefined takes default value

// parametrs depending on one another
function password(pass1=132, pass2=pass1*2){
   console.log("password 1: "+pass1);
   console.log("Password 2: "+pass2);
}
password(20);


// default parametes me another function ka use krna
function f1(age=20){
  return age;
}
function f2(name="Utkarsh maheshwari ",finalage=f1()){
  console.log("My name is "+name);
  console.log("My age is "+finalage);

}
f2();
f2("Thomas alva addition",145);

console.log(new Date());

new Date().getDay();

console.log(new Date().getFullYear());
console.log(new Date().getDay());
