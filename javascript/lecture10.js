// Error handling

// try me ham wo likhte hai jahan error aata hai jab error hota hai to catch andle krta  hai aur finaaly to hamesh chalta hai
// try{
//     console.log("hii iam inside try block");
//         console.log(x);
// }
// catch(error){
//     console.log("It is an error jo maine glti se likh diya");
//     console.log(error);
// }
// finally{
//     console.log("Mai to hamesha chlta hun");
// }

// // creating new error of our own

// try{
//     console.log("hii i am inside try bloak beauties");
//     console.log(v);
// }
// catch(error){
//     throw new Error("It is an reference error !!!!!!!!!!!!!!!!!!!!!");
// }


let errorcode=100;
if(errorcode==100){
    throw new Error("Your name mismatches with you pan");
}