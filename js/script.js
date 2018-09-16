"use strict";
var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".overlay");
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
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});