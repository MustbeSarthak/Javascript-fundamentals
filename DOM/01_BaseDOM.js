// DOM - Document Object Model
// Your should know about Selecting elements, changing text, changing html, css change, Attribute
// Event listener, creating element, removing element, traversing element, DOM manipulation

// Selecting From html 
// getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll


// getElementById
let abcd = document.getElementById("head");
console.dir(abcd);// It will show you the element in the form of object and you can see all the properties and methods of that element
console.log(abcd);

// getElementsByClassName
let abc = document.getElementsByClassName("head"); // It will return a HTMLCollection of all elements with the class name "head"

// QuerySelector
let abcde = document.querySelector("h1");
// selects the first H1 only present in the document
console.log(abcde);
// We can also select all the h1 elements using querySelectorAll

/*
-------------------------TYPES OF MANIPULATION-------------------------
1. Changing text

*/

// Changing text
let h1 = document.querySelector("h1");
h1.textContent = "Hello Sarthak Kaise ho";
console.logdir(h1);
// textContent will change the text of the element but it will not change the html structure of the element
// innerText will change the text of the element and it will also change the html structure of the element