// object cloning 
// 1.usingspread operator

obj1={name:"Utkarsh",age:28,profession:"Engineer"};
let obj2={...obj1};
console.log(obj1);
obj1.name="Brand";
console.log(obj1);
console.log(obj2);

obj3={class:"10",sub:"Math"}

// 2. using assign operator
let dest2=Object.assign({},obj2,obj3);
console.log(dest2);


// using iteration
let object4={name:"kavy maheshwatri", course:"Btech"};
let destination={};
for(let key in object4){
    let newkey=key;
    let vaklue=object4[key];
    destination[newkey]=vaklue;
}
console.log(destination);
object4.course="Btech hons";
console.log(object4);
console.log(destination);
