let taskCounter = 0;
let bool = true;
function addToList() {
    const mainDiv = document.getElementById('center');
    const newListItem = document.createElement('input');
    const seconderyDiv = document.createElement('div');
    let label = document.createElement('label');
    seconderyDiv.id = 'second';
    seconderyDiv.classList.add('secondery');
    newListItem.id = "task" + taskCounter + " li";
    newListItem.type = "checkbox";
    taskCounter++;
    label.id = "label" + taskCounter;
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }
    else {
        label.appendChild(t);
    }
    localStorage.setItem('task' + taskCounter.toString(), inputValue.toString());
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    editBtn.setAttribute('onclick', 'editTxt(this.id)');
    editBtn.classList.add('edit');
    editBtn.innerText = "Edit";
    editBtn.id = 'edit' + taskCounter;
    removeBtn.setAttribute('onclick', 'removeTxt(this.id)');
    removeBtn.classList.add('remove');
    removeBtn.id = 'remove';
    removeBtn.innerText = "Remove";
    mainDiv.appendChild(seconderyDiv);
    seconderyDiv.appendChild(newListItem);
    label.setAttribute("for", "task " + taskCounter);
    seconderyDiv.appendChild(label);
    seconderyDiv.appendChild(removeBtn);
    seconderyDiv.appendChild(editBtn);
}
// Make a button EDIT function
function editTxt(id) {
    if (bool) {
        let taskDiv = document.getElementById("label" + id[id.length - 1]);
        let content = taskDiv.innerHTML;
        let input = document.createElement("input");
        input.setAttribute("id", "toReplace" + id[id.length - 1]);
        input.setAttribute("value", content);
        if (taskDiv)
            taskDiv.replaceWith(input);
        bool = false;
    }
    else {
        let taskDiv = document.getElementById("toReplace" + id[id.length - 1]);
        let newContent = (document.getElementById("toReplace" + id[id.length - 1])).value;
        if (taskDiv)
            taskDiv.innerHTML = "";
        let newLable = document.createElement("lable");
        newLable.setAttribute("id", "lable" + (taskCounter - 1));
        newLable.innerHTML = newContent;
        if (taskDiv)
            taskDiv.replaceWith(newLable);
        bool = true;
    }
}
// MAKE A BUTTON : DELETE function 
function removeTxt(id) {
    let tasksDiv = document.getElementById(id).parentElement;
    if (tasksDiv)
        tasksDiv.innerHTML = "";
    taskCounter--;
}
function resetfile() {
    let fDiv = document.getElementById('center');
    if (fDiv)
        fDiv.innerHTML = "";
    taskCounter = 0;
    localStorage.clear();
}
