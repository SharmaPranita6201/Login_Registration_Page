const formOpenBtn = document.querySelector("#form_open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const closeBtn = document.querySelector(".form_close");
const loginBtn = document.querySelector("#login");
const signupBtn = document.querySelector("#signup");
const pwShowHide = document.querySelectorAll(".pw_hide");

pwShowHide.forEach((e) => {
  e.addEventListener("click", () => {
    let input = e.parentElement.querySelector("input");
    if (input.type === "password") {
      input.type = "text";
      e.classList.replace("ri-eye-off-line", "ri-eye-line");
    } else {
      input.type = "password";
      e.classList.replace("ri-eye-line", "ri-eye-off-line");
    }
  });
});

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
closeBtn.addEventListener("click", () => home.classList.remove("show"));

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
