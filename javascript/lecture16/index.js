// let firstPromise=new Promise((resolve,reject)=>{
//     console.log("utkarsh");
//     // resolve(500);
//     reject(new error("Internal server error"));
// })

// asynchronus code
// function saymyname(){
//     console.log("My name is Utkarsh");
// }
// setTimeout(saymyname,10000);


// function saymydogname(){
//     console.log("My dog name is max");
// }
// let secondPromise=new Promise((resolve,reject)=>{
//     setTimeout(saymydogname,15000);
//     resolve(10);
 
// })

// using of then and catch
// let thirdPromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Prmoise fullfilled");
//     }
//     else{
//         resolve("Promise rejected");
//     }
// });
// thirdPromise.then((message)=>{
//     console.log("Then ka message is maessage"+ message);
// }).catch((error)=>{
//     console.log("ye hai error "+error);
// })


// chaining promises


// thirdPromise.then((message)=>{
//     console.log("First message is "+message);
//     return "seccond message is this";
// }).then((message)=>{
//     console.log("This is second message "+message);
//     return "i am returning third message";
// }).then((message)=>{
//     console.log("Third message is "+message);
// })

// Handling multiple promises

let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first")
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
});


//  agar ek bhi promise reject hua toh promise.all reject ho jaega
Promise.all([promise1,promise2]).then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("This is error "+error);
})