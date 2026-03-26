// Select the element/id/attribute first
// Then add event listner


let button = document.querySelector("button");
button.addEventListener("click", function(){
    button.style.color = "red";
});

// To Listen any event we use function which takes two arguments 
// first is the listner itself , then the function 

// You also can remove the event listner by using 


// button.removeEventListener , this will remove the event listner 