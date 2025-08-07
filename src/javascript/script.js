const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("#container-header ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");

});

