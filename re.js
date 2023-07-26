let user=document.querySelector(".username");
let log =document.querySelector(".login");
let pass=document.querySelector(".pass");
let length=JSON.parse(localStorage.getItem(`tasks`)).length;
let reuser=JSON.parse(localStorage.getItem(`tasks`))[0].username;
let forget=document.getElementById("login");
let icon=document.querySelector(".ppass i");

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
log.onclick=function(e){
    if(user.value!=""&&pass!=""){
    for(let i=0;i<length;i++){
    if(user.value==JSON.parse(localStorage.getItem("tasks"))[i].username && pass.value==JSON.parse(localStorage.getItem(`tasks`))[i].password){
        location.href="https://keen-gpt3.surge.sh/"
    }
    else if(i==length-1){
    const loginForm = document.querySelector("#login");
        
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    } 
}
}
else{
    const loginForm = document.querySelector("#login");
    setFormMessage(loginForm, "error", "Invalid username/password combination");
}
}
icon.onclick=function(){
    if(icon.classList=="fa-regular fa-eye"){
      icon.classList="fa-regular fa-eye-slash";
      pass.type="password";
    }else{
      icon.classList="fa-regular fa-eye"
      pass.type="text";
    }
    
  }
forget.onsubmit=function(e){
    e.preventDefault();
}