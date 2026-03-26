// Select the element/id/attribute first
// Then add event listner

// const { json } = require("body-parser");


let button = document.querySelector("button");
button.addEventListener("click", function(){
    button.style.color = "red";
});

// To Listen any event we use function which takes two arguments 
// first is the listner itself , then the function 

// You also can remove the event listner by using 


// button.removeEventListener , this will remove the event listner 

// There are various types of event listner 
let input = document.querySelector("input");
// This event listner will show what you have written word-by-word 
input.addEventListener("input", function(data){
    // WHy this? SO whenever we backspace it does'nt shows the null
    if(data.data !== null){
        console.log(data.data);
    }
});


// Selection Listners
// To track the changes or track which option is chosen by the user we use " change" Listner
let Select = document.getElementById("sel");
Select.addEventListener("change", function(sel){
    console.log("Fruit Selected: ", sel.target.value);  
});