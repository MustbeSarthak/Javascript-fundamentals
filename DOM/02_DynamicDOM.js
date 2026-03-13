// _______________________DYNAMIC DOM_______________________
// Create element , append element, prepend element, remove element, replace element

let h1 = document.createElement("h1");
h1.textContent = "Hello Sarthak Kaise ho";
document.querySelector("Body").prepend(h1); // It will add the h1 element at the beginning of the body  

console.log(h1); // It will create a new h1 element but it will not be added to the DOM

// How to remove any class or id or element using js
let h2 = document.createElement("h2");
h2.textContent = "Hello Sarthak Kaise ho";
document.querySelector("Body").append(h2); // It will add the h2 element at the end of the body

h2.remove(); // It will remove the h2 element from the DOM


// We can also add class 
let h3 = document.createElement("h3");
h3.classList.add("heading");
h3.textContent = "Hello Sarthak Kaise ho";
document.querySelector("Body").append(h3); // It will add the h3 element at the end of the body