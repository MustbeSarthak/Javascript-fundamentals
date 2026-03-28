    let btn = document.querySelector("#btn");
    let fileinp = document.querySelector("#fileinp");

    btn.addEventListener("click", function(){
        fileinp.click(); // We added Eventlistner on button but when we click on it the click function has been set on the fileinp which opens the files
    });
    fileinp.addEventListener("change", function(dets){
        const file = dets.target.files[0]; 
        if(file){
            btn.textContent = file.name; // Chnages the btn content whichever file we are choosing.
        }
    });
