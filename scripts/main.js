const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navMenuToggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
