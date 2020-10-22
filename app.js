const inputfield = document.querySelector(".input");
const submit = document.getElementById("btn");
const unlist = document.getElementById("myUl");
const clearBtn = document.querySelector(".clear-tasks");

// ADD LI ON CLICK
submit.addEventListener("click", newElement);

// CLEAR ALL 
clearBtn.addEventListener("click", clearTasks);

// CREATE LI
function newElement() {
  let li = document.createElement("li");
  let inputValue = inputfield.value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  unlist.appendChild(li);

  const link = document.createElement("a");
  link.className = "delete-item";
  link.innerHTML = "X";
  li.appendChild(link);

  let close = document.getElementsByClassName("delete-item");
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

  if (inputValue === "") {
    li.style.display = "none";
    alert("Write your task!");
  } 
  
  inputfield.value = "";
}


// CLEAR ALL TASKS
function clearTasks() {
  while(unlist.firstChild) {
    unlist.removeChild(unlist.firstChild);
  }
}