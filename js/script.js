/* =========================
SCRIPT.JS
========================= */

/* HEADER EFFECT */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.classList.add("header-scrolled");
  } else{
    header.classList.remove("header-scrolled");
  }

});

/* MOBILE MENU */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* CLOSE MENU */

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach(element => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

/* PARALLAX */

window.addEventListener("scroll", () => {

  const scrolled = window.pageYOffset;

  document.querySelectorAll(".bg-blur").forEach((blur, index) => {

    const speed = (index + 1) * 0.2;

    blur.style.transform =
      `translateY(${scrolled * speed}px)`;

  });

});