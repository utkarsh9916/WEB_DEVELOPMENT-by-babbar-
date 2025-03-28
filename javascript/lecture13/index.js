
// 1.add eventlistner

// function change_text(){
//     let element1=document.getElementById("para1");
//     element1.textContent="Hello ji chaa peelo!";
// }

// window.onload=function(){
// let element1=document.getElementById("para1");
// element1.addEventListener('click',change_text);

// }



// element1.removeEventListener('click',change_text);


// 2.now  event objects

function change_text(event){
    console.log(event);
    let element1=document.querySelector("#para1");
    element1.textContent="chai peelo!";
}
window.onload=function(){
    let element1=document.querySelector("#para1");
    element1.addEventListener("click",change_text);
}

// now to see info about event go to console


// 3. default action prevention

let anchorelement=document.getElementById("anc1");
anchorelement.addEventListener("click",function(event){
    event.preventDefault();
    anchorelement.textContent="click ho gya bhai ab kya foodega!";
})


// 4. avoid event listner


function alert_para(event){
    alert("you have clicked on para "+event.target.textContent);
}
let paras=document.querySelectorAll("p");
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     console.log("eventListneradded");
//     para.addEventListener('click',alert_para);

// }

// since paragraphs comes under div so why we create so much Listner so use only one

let divelement=document.getElementById("div1");
divelement.addEventListener('click',alert_para);

// if you want only event trigger when span we click on span


// function alert_para(event){
//     if(event.target.nodeName="SPAN"){
//     alert("you have clicked on "+event.target.textContent);
//     }

// }

// let divelement=document.getElementById("div1");
// divelement.addEventListener("click",alert_para);