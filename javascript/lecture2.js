// what is let ( functionally scoped an d globally scoped)
function fun1(){
var a="Utkarsh";

}
var b= "Maheshwari";
console.log(b);
// console.log(a);  cant be ccessed

// re assingned
b="Utkarsh Maheshwari";
console.log(b);

// recreate
var b=25;
var b=45;
console.log(b);

let a=3;
// let a=4; cant be reassinged
a=4;
console.log(a)

const c1=1;
console.log(c1);

const sym1=Symbol("Utkarsh");
console.log(sym1);
const sym2=Symbol("Utkarsh");
console.log(sym1==sym2);