// gather the element

let myimage = document.getElementById("change");

function change_image() {
    
    let text = myimage.src;


    if(text.includes("images/avish.png")) {
        myimage.src = "images/image_caption.png";
    }
    else {
        myimage.src = "images/avish.png";
    }
}

myimage.addEventListener("click", change_image);