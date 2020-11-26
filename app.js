'use strict'
var formContainer = document.getElementById("form");
var openForm = document.getElementById("openForm");
var closeForm = document.getElementById("closeForm");

openForm.addEventListener("click", () => {
    formContainer.classList.add("opened");
});

closeForm.addEventListener("click", () => {
    formContainer.classList.remove("opened");
})