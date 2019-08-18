var input = document.getElementById("userInput");
var button = document.getElementById("enterButton");
var ulFirst = document.querySelector("#firstList");
var ulComplete = document.querySelector("#listCompleted")
var deleteButton = document.getElementById("deleteButton");
var divLine = document.getElementById("compList");

deleteButton.hidden = true;

function createFirstListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("listItem");
    ulFirst.appendChild(li);
    input.value = "";
    firstList(li);
     
}

function firstList (listFirst) {

    // Crossed out when clicked
    listFirst.addEventListener("click", function () {
        listFirst.classList.add("done");

        // move from one ul to the other
        ulComplete.appendChild(listFirst);
        createDoneListElement(listFirst);
    });

}

function createDoneListElement(list) {
    
    ulComplete.classList.add("doneList");
    divLine.classList.add("completedList");
    deleteButton.hidden = false;

    list.addEventListener("click", function () {
        list.classList.remove("done");

        // move from one ul to the other
        ulFirst.appendChild(list);
        firstList(list);



        if(!ulComplete.hasChildNodes()){
            ulComplete.classList.remove("doneList");
            deleteButton.hidden = true;
            divLine.classList.remove("completedList");
        }

    }); 

    deleteButton.onclick = function () {

            var first = ulComplete.firstElementChild; 
            while (first) { 
                first.remove(); 
                first = ulComplete.firstElementChild; 
            }
             
            if(!ulComplete.hasChildNodes()){
                ulComplete.classList.remove("doneList");
                deleteButton.hidden = true;
                divLine.classList.remove("completedList");
            }
        
            
        }

}
    

function removeParent(event) {
    event.target.parentNode.remove();
}



function addListAfterClick() {
    if (input.value.length > 0) {
        createFirstListElement();
    }
}

function addListAfterKeypress(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        createFirstListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




