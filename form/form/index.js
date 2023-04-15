const time_to_show_login = 400;
const time_to_hidden_login = 200;

function saveCredentials() {
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  console.log(username)
}


function change_to_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function(){  
    document.querySelector('.cont_form_login').style.opacity = "1"; 
  }, time_to_show_login);

  setTimeout(function(){    
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, time_to_hidden_login);  
}

const time_to_show_sign_up = 100;
const time_to_hidden_sign_up = 400;

function change_to_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function(){  
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, time_to_show_sign_up);  

  setTimeout(function(){   
    document.querySelector('.cont_form_login').style.display = "none";
  }, time_to_hidden_sign_up);  
}    

const time_to_hidden_all = 500;

saveCredentials();
