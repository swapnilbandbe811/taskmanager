function addTask(){
    let inputRef=document.querySelector('#textid');

    let container1=document.querySelector('.container');
    let container2=document.querySelector('.ref-container');

    let taskref=container2.children[0];
    let delref=container2.children[1];

    let newTask=taskref.cloneNode(true);
    let newDel=delref.cloneNode(true);

    newTask.innerHTML=inputRef.value;
    newTask.style.visibility="visible";
    newDel.style.visibility="visible";

    container1.appendChild(newTask);
    container1.appendChild(newDel);

    inputRef.value= "";

}

function deletetask(delElemRef){

    let taskRef = delElemRef.previousElementSibling;

    delElemRef.remove();
    taskRef.remove();

}