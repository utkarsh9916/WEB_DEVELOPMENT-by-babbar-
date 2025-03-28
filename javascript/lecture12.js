
// using .style
divelement=document.getElementById('div2');


divelement.style.backgroundColor='red';



divelement.style.color='white';


// using css Text ,serAttribute,className;
undefined
element1.setAttribute("style","backgroundColor:red,height:250px");
undefined
element1.setAttribute("style","background-color:red; height : 250px;");
undefined
element1.style.cssText="backgroundColor:blue; color:red";\
VM4809:1 Uncaught SyntaxError: Invalid or unexpected token
element1.style.cssText="background-color:blue;color:red;");
VM4999:1 Uncaught SyntaxError: Unexpected token ')'
element1.style.cssText="background-color:blue; color: red;";
'background-color:blue; color: red;'
element1.setAttribute("class","class1");
undefined
Aelement1.className;
VM5450:1 Uncaught ReferenceError: Aelement1 is not defined
    at <anonymous>:1:1
(anonymous) @ VM5450:1
element1.className;
'class1'
element1.className="class2";
'class2'
element1.className;
'class2'

// using classList 
element1.classList.add("class3");
undefined
element1.classList
DOMTokenList(2) ['class2', 'class3', value: 'class2 class3']
element1.classList.remove("class3")
undefined
element1.classList;
DOMTokenList ['class2', value: 'class2']
element1.classList.toogle;
undefined
element1.classList
DOMTokenList ['class2', value: 'class2']
element1.classList.toggle("class2");
false
elemnt1.classList;
VM6602:1 Uncaught ReferenceError: elemnt1 is not defined
    at <anonymous>:1:1
(anonymous) @ VM6602:1
element1.classList;
DOMTokenList [value: '']
element1.classList("class2");
VM6764:1 Uncaught TypeError: element1.classList is not a function
    at <anonymous>:1:10
(anonymous) @ VM6764:1
element1.classList.toggle("class2");
true
element1.classList
DOMTokenList ['class2', value: 'class2']
element1.classList.contains("class2");
true