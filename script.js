const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

CreateBtn.addEventListener("click", () =>
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
});

