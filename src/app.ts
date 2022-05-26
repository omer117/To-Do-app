let taskCounter = 0;

function addToList() {
    const mainDiv = document.getElementById('center')
    const newListItem = document.createElement('input');
    const seconderyDiv = document.createElement('div');
    let label = document.createElement('label');
    seconderyDiv.id = 'second';
    seconderyDiv.classList.add('secondery');
    newListItem.id = "task" + taskCounter + " li";
    newListItem.type = "checkbox";
    taskCounter++;


    let inputValue = ( < HTMLInputElement > document.getElementById("myInput")).value;
    let t = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("You must write something!");
        return;
    } else {
        label.appendChild(t);
    }

    localStorage.setItem('task' + taskCounter.toString(), inputValue.toString());


    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    editBtn.setAttribute('onclick', 'editTxt(this.id)')
    editBtn.classList.add('edit');
    editBtn.innerText = "Edit";
    editBtn.id = 'edit';
    removeBtn.setAttribute('onclick', 'removeTxt(this.id)')
    removeBtn.classList.add('remove');
    removeBtn.id = 'remove'
    removeBtn.innerText = "Remove";


    mainDiv.appendChild(seconderyDiv);
    seconderyDiv.appendChild(newListItem);
    label.setAttribute("for", "task " + taskCounter);
    seconderyDiv.appendChild(label);
    seconderyDiv.appendChild(removeBtn)
    seconderyDiv.appendChild(editBtn)
}

// Make a button EDIT function
function editTxt() {

}
// MAKE A BUTTON : DELETE function 
function removeTxt(id: string) {
    let tasksDiv = <HTMLElement>document.getElementById(id).parentElement;
    console.log(id);
    console.log(tasksDiv);
    if (tasksDiv) tasksDiv.innerHTML = "";
    taskCounter--;

}

function resetfile(){
let fDiv = document.getElementById('center');
if (fDiv) fDiv.innerHTML = "";
taskCounter = 0;

localStorage.clear();
console.log(localStorage);
}
