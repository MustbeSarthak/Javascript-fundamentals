// _______________________DYNAMIC DOM_______________________
// Create element , append element, prepend element, remove element, replace element

let h1 = document.createElement("h1");
h1.textContent = "Hello Sarthak Kaise ho";
document.querySelector("Body").prepend(h1); // It will add the h1 element at the beginning of the body  

console.log(h1); // It will create a new h1 element but it will not be added to the DOM