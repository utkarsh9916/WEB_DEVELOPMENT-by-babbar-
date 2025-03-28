async function getdata(){
    setTimeout(function(){
        console.log("This is async function");
    },3000);
}

getdata();
// async function always retuen promise
let output=getdata();


// fetch API and await
async function getdata1(){
         let response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
        //  parsing it to json
        let data= await response.json();
         console.log(data);
}

getdata1();

