let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

let todos = [];

addToDoButton.addEventListener("click", function () {
  var uusi = document.createElement("p");
  uusi.classList.add("p-style");
  uusi.innerText = inputField.value;
  toDoContainer.appendChild(uusi);
  inputField.value = "";
  uusi.addEventListener("click", function () {
    uusi.style.textDecoration = "line-through";
  });
  uusi.addEventListener("dblclick", function () {
    toDoContainer.removeChild(uusi);
  });
});

function errorMessage() {
    if (document.getElementById("inputField").value == 0){
        alert("Kirjoita tekstikenttään jotain!");
    }
}

function addToLocalStorage(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}