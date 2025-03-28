
// 1. code for reflow and repaint concept
// const t1=performance.now();
// for(let i=0;i<10;i++){
//     let paras=document.createElement("p");
//     paras.textContent="This is para: "+ (i+1);
//     document.body.appendChild(paras);
// }

// const t2=performance.now();
// console.log(t2-t1);



// const t3=performance.now();
// let mydiv=document.createElement("div");
// for(let i=0;i<10;i++){
//     let paras=document.createElement('p');
//     paras.textContent="This is New_para "+(i+1);
//     mydiv.appendChild(paras);
// }
// document.body.appendChild(mydiv);

// const t4=performance.now();
// console.log(t4-t3);


// 2. code for documnet fragment concept
let fragment=document.createDocumentFragment();
for(let i=0;i<100;i++){
    let para=document.createElement("p");
    para.textContent="THis is para "+(i+1);
    // this line below does not create any reflow and reform
    fragment.appendChild(para);
}

// this line below creates repaint and reflow
document.body.appendChild(fragment);