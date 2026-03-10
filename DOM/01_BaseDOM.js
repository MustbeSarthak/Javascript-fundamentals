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

1. Changing text - innertext, textContent, innerHTML.
2. changing html - innerHTML
3. changing css - style
4. changing attribute - setAttribute, getAttribute, removeAttribute
5. Event listener - addEventListener, removeEventListener
6. Creating element - createElement, appendChild, removeChild
7. Traversing element - parentNode, childNodes, nextSibling, previousSibling

--------------------------TYPES OF MANIPULATION--------------------------
*/

// Changing text
let h1 = document.querySelector("h1");
h1.textContent = "Hello Sarthak Kaise ho";
console.logdir(h1);
// textContent will change the text of the element but it will not change the html structure of the element
// innerText will change the text of the element and it will also change the html structure of the element

h1.innerHTML = "Sarthak badhiya hai";
// innerHTML will change the html structure of the element and it will also change the text of the element  

// ________________________________ATTRIBUTES___________________________________
let attribute = document.querySelector("a");

attribute.href = "https://www.google.com"; // It will change the href attribute of the anchor tag

// Changing Image attribute
let img = document.querySelector("img");
img.src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"; // It will change the src attribute of the image tag
img.alt = "Google Logo"; // It will change the alt attribute of the image tag