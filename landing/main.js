let cookie = document.getElementsByClassName("cookie")[0];
let cookieCloseBtn = document.getElementsByClassName("cookie__button")[0];
cookieCloseBtn.addEventListener("click", (e) => {
  cookie.style.display = "none";
});
setTimeout(() => {
  cookie.style.transform = "translateY(0px)";
}, 2000);

let formFields = document.querySelectorAll(".get-in-touch__input");
checkForm = () => {
  formFields.forEach((f) => {
    if (f.value === "") {
      f.classList.add("get-in-touch__input___empty");
    } else {
      f.classList.remove("get-in-touch__input___empty");
    }
  });
};
