let newElement = document.createElement('h3');
let divTag = document.querySelector('#div2');
newElement.textContent = "This is new Element";
divTag.insertAdjacentElement('beforeend', newElement); // ✅ Correct usage

// deletion
let deleteElement=document.querySelector("#p1");
divTag.removeChild(deleteElement);

// Q. how to acces parent using child
let child = document.getElementById("child");
let parent = child.parentElement; // Get the parent element
console.log(parent);
