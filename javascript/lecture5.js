function getmyname(){
    console.log("Utkarsh Maheshwari");
}
getmyname();

function sum(a,b){
    console.log(a+ " "+b);
    console.log(a+b);
}
sum("Abhishek","Verma");

function calculatesum(a,b){
    console.log(a+b);
}

calculatesum(4,10);

function myname(name){
   let myname1= "Hii my name is "+name;
   return myname1;
}

console.log(myname("Utkarsh"));


// function expression

let getmultiplication=function(a,b){
    return a*b;
}
let multiplication=getmultiplication(2,4);
console.log(multiplication);



// Arrow Functions
let getsquare=(x)=>{
    return x**x;
}
let ans=getsquare(3);
console.log(ans);