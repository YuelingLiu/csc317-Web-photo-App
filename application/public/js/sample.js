// line

/**
 * 
 * 
 * This function computes the min of 2 values 
 * @version 1.2
 * @authro me 
 * @argument 
 * @return 
 * 
 * 
 * 
 * 
 * 
 */
/*
The first thing we have to do is to save references for the form,
 and the input fields. 
 As we gave id for every input and the form we can easily to do 
 by using getElementById.

*/

var username = document.getElementById("username");
var password = document.getElementById("password");
var password2 = document.getElementById("password-confirm");

var usermessage = document.getElementById("user-message");
var passwordmessage =document.getElementById("password-message");
var passwordConfirmMessage = document.getElementById("password-confirm-message");

var number = document.getElementById("number");
var letter = document.getElementById("letter");
var length = document.getElementById("length");
var alpha = document.getElementById("alphnumericCharacters");

var uppercase =document.getElementById("uppercase");
var onenumber =document.getElementById("onenumber");
var special= document.getElementById("special");
var pswlength= document.getElementById("pswlength");

var signup= document.getElementById("sign-up");

// Validator logic

var validator = {
  usernameLetter: function() {
    var validateUsernameRex= /^[a-zA-z]/;
    return validateUsernameRex.test(username.value);
  },
  usernameAlpha: function() {
    var validateUsernameRex = /[^0-9A-Za-z]/;
    return !validateUsernameRex.test(username.value);
  },
  usernameLength:function() {
    return username.value.length >=3;
  },
  
  passwordUppercase: function(){
    var validateUppercase = /[A-Z]/;
    return validateUppercase.test(password.value);
  },

  passwordOnenumber: function(){
    var validateOneNumber=/[0-9]/;
    return validateOneNumber.test(password.value);
  },
  passwordSpecial: function(){
    var validateSpecial= /[!@#$%^&*]/;
    return validateSpecial.test(password.value);
  },
  passwordLength:function(){
    return password.value.length >=8;
  },
  
  confirmPassword:function(){
    return (document.getElementById("password").value ==
    document.getElementById("password-confirm").value)
  },
  checkboxConfirm:function(){
    return (document.getElementById("checkbox").value.checked);
  },

}



validator.username = function() {
  return validator.usernameLetter() && validator.usernameAlpha() 
    && validator.usernameLength();
}

validator.password= function(){
  return validator.passwordUppercase() && validator.passwordOnenumber()
    && validator.passwordSpecial() && validator.passwordLength();
}

// When the user clicks on the username field, show the message box
username.onfocus = function() {
  document.getElementById("user-message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
username.onblur = function() {
  document.getElementById("user-message").style.display = "none";
}

// When the user starts to type something inside the password field
username.onkeyup = function() { // Validate first letters
  if (validator.username()) {
    usermessage.classList.remove("invalid");
    usermessage.classList.add("valid");
  } else {
    usermessage.classList.remove("valid");
    usermessage.classList.add("invalid");
  }
  if (validator.usernameLetter()) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  if (validator.usernameAlpha()) {
    alpha.classList.remove("invalid");
    alpha.classList.add("valid");
  } else {
    alpha.classList.remove("valid");
    alpha.classList.add("invalid");
  }

  if(validator.usernameLength()){
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};



// When the user clicks on the username field, show the message box
password.onfocus = function() {
  document.getElementById("password-message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
password.onblur = function() {
  document.getElementById("password-message").style.display = "none";
}

password.onkeyup= function(){
  if(validator.password()){
    passwordmessage.classList.remove("invalid");
    passwordmessage.classList.add("valid");  
  }else{
    passwordmessage.classList.remove("valid");
    passwordmessage.classList.add("invalid");
  }
  if(validator.passwordUppercase()){
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
  }else{
    uppercase.classList.remove("valid");
    uppercase.classList.add("Invalid");
  }

  if(validator.passwordOnenumber()){
    onenumber.classList.remove("invalid");
    onenumber.classList.add("valid");
  }else{
    onenumber.classList.remove("valid");
    onenumber.classList.add("Invalid");
  }

  if(validator.passwordSpecial()){
    special.classList.remove("invalid");
    special.classList.add("valid");
  }else{
    special.classList.remove("valid");
    special.classList.add("Invalid");
  }

  if(validator.passwordLength()){
    pswlength.classList.remove("invalid");
    pswlength.classList.add("valid");
  }else{
    pswlength.classList.remove("valid");
    pswlength.classList.add("Invalid");
  }
}; // it had semicolon here, should i take it away?



password2.onfocus = function() {
  document.getElementById("confirm-message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
password2.onblur = function() {
  document.getElementById("confirm-message").style.display = "none";
}

password2.onkeyup= function(){
  if(validator.confirmPassword()){
    passwordConfirmMessage.classList.remove("invalid");
    passwordConfirmMessage.classList.add("valid");  
  }else{
    passwordConfirmMessage.classList.remove("valid");
    passwordConfirmMessage.classList.add("invalid");
  }
};


var form = document.getElementById("form");
form.onsubmit = function(event){
  alert('submitted');
  event.preventDefault();
  window.location.reload();
}



signup.onclick = function(){
   if(validator.username() && validator.password() && validator.confirmPassword()
      && validator.checkboxConfirm()){
      alert("form submitted");

   }else{
     alert("It is not valid");
   }

}
