const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");
  const nav = document.querySelector("nav").classList.toggle("nav-active");
  line1.classList.toggle("line1-active");
  line2.classList.toggle("line2-active");
  line3.classList.toggle("line3-active");
});
