const addInput = document.querySelector("#taskInput"); 
const ul = document.querySelector("ul"); 
const addTodo = document.querySelector("#addTodo"); 

// Task add kerne ka function
addTodo.addEventListener("click", function () {
    const taskText = addInput.value.trim();
    
    if (taskText === "") return; 

    let li = document.createElement("li");
    let editBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    // Text ko alag element (span) mein rakha taaki edit karne mein aasani ho
    let span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);
    
    // Edit Button
    editBtn.textContent = 'Edit';
    editBtn.setAttribute("class", "edit");
    li.appendChild(editBtn);

    // Delete Button
    delBtn.textContent = 'Delete';
    delBtn.setAttribute("class", "del");
    li.appendChild(delBtn);
    
    ul.appendChild(li);
    addInput.value = '';
});

// Click events ko handle karne ka function (Delete, Edit, aur Toggle)
ul.addEventListener("click", function (e) {
    // 1. Delete Functionality
    if (e.target.classList.contains('del')) { 
        e.target.parentElement.remove();
    } 
    
    // 2. Edit Functionality
    else if (e.target.classList.contains('edit')) {
        let li = e.target.parentElement;
        let span = li.querySelector("span");
        
        // Prompt box mein purana text dikhana
        let updatedText = prompt("Edit your task:", span.textContent);
        
        // Agar user cancel na kare aur empty text na ho, toh update karein
        if (updatedText !== null && updatedText.trim() !== "") {
            span.textContent = updatedText.trim();
        }
    } 
    
    else if (e.target.nodeName === 'SPAN' || e.target.nodeName === 'LI') {
        let li = e.target.closest('li');
        li.classList.toggle('list-item');
    }
});
