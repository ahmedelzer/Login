function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
let conpass=document.querySelector(".Confirm.password");
let errocon=document.querySelector(".confirm")
let user2=document.querySelector(".user");
let pass2=document.querySelector(".pass");
let log2=document.querySelector(".re");
let icon=document.querySelector(".ppass i");


let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
icon.onclick=function(){
  if(icon.classList=="fa-regular fa-eye"){
    icon.classList="fa-regular fa-eye-slash";
    pass2.type="password";
  }else{
    icon.classList="fa-regular fa-eye"
    pass2.type="text";
  }
  
}
// Trigger Get Data From Local Storage Function
// getDataFromLocalStorage();

// Add Task
log2.onclick = function () {
  if(user2.value!="" && pass2.value!="" && pass2.value==conpass.value){
    addTaskToArray(user2.value,pass2.value);
  }
};

function addTaskToArray(userv,passv) {
  // Task Data
  const task = {
  username:userv,
  password:passv,
};
  // Push Task To Array Of Tasks
arrayOfTasks.push(task);
  // Add Tasks To Page
//   addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
addDataToLocalStorageFrom(arrayOfTasks);
}

function addDataToLocalStorageFrom(arrayOfTasks) {
window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
let data = window.localStorage.getItem("tasks");
if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
}
}

function deleteTaskWith(taskId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    // document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.add("form--hidden");
    //     createAccountForm.classList.remove("form--hidden");
    // });

    // document.querySelector("#linkLogin").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.remove("form--hidden");
    //     createAccountForm.classList.add("form--hidden");
    // });

    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();

    //     // Perform your AJAX/Fetch login

    //     setFormMessage(loginForm, "error", "Invalid username/password combination");
    // });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});