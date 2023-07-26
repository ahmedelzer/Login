let user=document.querySelector(".username");
let log =document.querySelector(".login");
let forget=document.getElementById("login");
let length=JSON.parse(localStorage.getItem(`tasks`)).length;
let pass=document.querySelector(".password");
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
log.onclick=function(e){
    for(let i=0;i<length;i++){
    if(user.value==JSON.parse(localStorage.getItem("tasks"))[i].username){
        pass.innerHTML=`Your password:${JSON.parse(localStorage.getItem("tasks"))[i].password}`;
    }
    else if(i==length-1){
    const loginForm = document.querySelector("#login");
        
        setFormMessage(loginForm, "error", "Invalid username");
    }
    
}
}
forget.onsubmit=function(e){
    e.preventDefault();
}