let taskCounter = 1;

function addToList() {
    //creating Labeles and inputs, setting atr and id's
    const mainDiv = document.getElementById('center');
    const newListItem = document.createElement('input');
    const seconderyDiv = document.createElement('div');
    let label = document.createElement('label');
    seconderyDiv.classList.add('second');
    label.setAttribute("for", "task" + taskCounter);
    label.innerHTML = ('task' + taskCounter + "todo!!");
    newListItem.id = "task" + taskCounter + " li";
    newListItem.type = "checkbox";
    taskCounter++;


    //Creating Edit & Remove btns
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    editBtn.classList.add('edit');
    removeBtn.classList.add('remove');
    editBtn.innerText = 'Edit';
    removeBtn.innerText = 'Remove';


    //Append
    mainDiv.appendChild(seconderyDiv);
    seconderyDiv.appendChild(newListItem);
    seconderyDiv.appendChild(label);
    seconderyDiv.appendChild(removeBtn);
    seconderyDiv.appendChild(editBtn);
};


//TODO Make a button EDIT function
function edit() {


}

//TODO MAKE A BUTTON : DELETE function 
var close = document.getElementsByClassName("remove");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {

    }
}


//TODO MAKE A CLEAR ALL BUTTON function
function clearAll() {


}