"use strict"; 
var link = document.querySelector(".btn-feedback"); 
var popup = document.querySelector(".modal-feedback"); 
var overlay = document.querySelector(".overlay"); 
var close = popup.querySelector(".feedback-close"); 
var form = popup.querySelector(".modal-feedback-form"); 
var email = popup.querySelector("[name=email"); 
var isStorageSupport = true; 
var storage = ""; 
try { 
storage = localStorage.getItem("email"); 
} catch (err) { 
isStorageSupport = false; 
} 

link.addEventListener("click", function (evt) { 
evt.preventDefault(); 
overlay.classList.add("modal-show"); 
popup.classList.add("show"); 

if (storage) { 
login.value = storage; 
password.focus(); 
} else { 
login.focus(); 
} 
}); 

form.addEventListener("submit", function (evt) {
if (!email.value) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
} else {
if (isStorageSupport) {
localStorage.setItem("login", login.value);
}
}
});

close.addEventListener("click", function (evt) { 
evt.preventDefault(); 
overlay.classList.remove("modal-show"); 
popup.classList.remove("show"); 
}); 


window.addEventListener("keydown", function (evt) { 
if (evt.keyCode === 27) { 
evt.preventDefault(); 
if (popup.classList.contains("modal-show")) { 
overlay.classList.remove("modal-show"); 
popup.classList.remove("show"); 
} 
} 
});