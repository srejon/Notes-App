const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    const savedNotes = localStorage.getItem("notes");
    notesContainer.innerHTML = savedNotes ? savedNotes : "";
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

CreateBtn.addEventListener("click", () =>
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.textContent = "Type your note here..."
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
        e.stopPropagation();
    }
    notesContainer.addEventListener("input", function (e) {
        if (e.target.classList.contains("input-box")) {
            updateStorage(); // Update storage when notes are edited
        }
    });
});

