const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll("nav li");

hamburger.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
});

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("nav-active");
    hamburger.classList.remove("hamburger-active");
  });
});

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");

window.addEventListener("scroll", () => {
  if (window.scrollY > 890 && window.scrollY < 1400) {
    link2.classList.add("active-link");
    link1.classList.remove("active-link");
    link3.classList.remove("active-link");
  } else if (window.scrollY > 1400) {
    link3.classList.add("active-link");
    link2.classList.remove("active-link");
    link1.classList.remove("active-link");
  } else {
    link1.classList.add("active-link");
    link2.classList.remove("active-link");
    link3.classList.remove("active-link");
  }
});
