var input = document.getElementById("userInput");
var button = document.getElementById("enterButton");
var ulFirst = document.querySelector("#firstList");
var ulComplete = document.querySelector("#listCompleted");
var deleteButton = document.getElementById("deleteButton");
var divLine = document.getElementById("compList");

//Delete button does not appear until an item is deleted
deleteButton.hidden = true;

//input if button is clicked
button.addEventListener("click", addListAfterClick);

//input is enter key is pressed
input.addEventListener("keypress", addListAfterKeypress);

//input transferred to ul
function createFirstListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.classList.add("listItem");
  ulFirst.appendChild(li);
  input.value = "";
  firstListElement(li);
}

//Function to listen when lis are clicked
function firstListElement(li) {

  // Crossed out when clicked
  li.addEventListener("click", function() {
    li.classList.add("done");

    // move from one ul to the other
    ulComplete.appendChild(li);
    createDoneListElement(li);
  });
}

//Function to listen when crossed out lis are clicked
function createDoneListElement(li) {

    console.log(li);
  ulComplete.classList.add("doneList");
  divLine.classList.add("completedList");
  deleteButton.hidden = false;

  li.addEventListener("click", function() {

    //remove crossed-out
    li.classList.remove("done");

    // move from one ul to the other
    ulFirst.appendChild(li);
    firstListElement(li);

    //to check if crossed-out list is empty
    if (!ulComplete.hasChildNodes()) {
      ulComplete.classList.remove("doneList");
      deleteButton.hidden = true;
      divLine.classList.remove("completedList");
    }
  });

  //Delete button to empty crossed-out list
  deleteButton.onclick = function() {
    var first = ulComplete.firstElementChild;
    while (first) {
      first.remove();
      first = ulComplete.firstElementChild;
    }

    if (!ulComplete.hasChildNodes()) {
      ulComplete.classList.remove("doneList");
      deleteButton.hidden = true;
      divLine.classList.remove("completedList");
    }
  };
}

//function to add to list after click
function addListAfterClick() {
  if (input.value.length > 0) {
    createFirstListElement();
  }
}

//function to add to list after Enter
function addListAfterKeypress(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    createFirstListElement();
  }
}

