const header = document.querySelector("header");
const nav = document.querySelector("nav ul");
const navButton = document.querySelector("#mobile_nav");
const menuItems = document.querySelectorAll("nav ul li a");
const backButton = document.querySelector("#backToTop");

const mobMenu = () => {
  for (const link of menuItems) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backButton.style.display = "block";
    header.classList.add("bg");
  } else {
    backButton.style.display = "none";
    header.classList.remove("bg");
  }
};

const getToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

navButton.addEventListener("click", mobMenu);
backButton.addEventListener("click", getToTop);
