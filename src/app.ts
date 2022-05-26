
let taskCounter = 1;

function addToList() {
const mainDiv = document.getElementById('center')
const newListItem = document.createElement('input');
const seconderyDiv = document.createElement('div');
let label = document.createElement('label');
seconderyDiv.classList.add('second');
newListItem.id = "task" + taskCounter + " li";
newListItem.type = "checkbox";
taskCounter++;
const editBtn = document.createElement('button');
const removeBtn = document.createElement('button');

editBtn.classList.add('edit');
removeBtn.classList.add('remove');

mainDiv.appendChild(seconderyDiv);
seconderyDiv.appendChild(newListItem);
label.setAttribute("for", "task"+taskCounter);
label.innerHTML =('task' +taskCounter+ "todo!!")
seconderyDiv.appendChild(label);
seconderyDiv.appendChild(removeBtn)
seconderyDiv.appendChild(editBtn)

//Make a button EDIT function
//MAKE A BUTTON : DELETE function 
//MAKE A CLEAR ALL BUTTON function

};
