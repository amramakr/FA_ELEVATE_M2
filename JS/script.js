const showPopupBtn = document.querySelector(".login-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const formPopup = document.querySelector(".form-popup");




showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      formPopup.classList[link.id === "signup-link" ? 'add': 'remove'] ("show-signup");
      
    });
});     
