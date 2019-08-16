var input = document.getElementById("userInput");
var button = document.getElementById("enterButton");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("blueTxt");
    ul.appendChild(li);
    input.value = "";

    // Crossed out when clicked

    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });


    // Create a new delete button to remove item from the list
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete!"));
    button.classList.add("deleteBtn")
    li.appendChild(button);
    button.onclick = removeParent;
}

function removeParent(event) {
    event.target.parentNode.remove();
}

function addListAfterClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


