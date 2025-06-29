// Collecting DOM for the Mobile friendly interface
const Toggler = document.getElementById("toggleIcon");
const SideNav = document.getElementById("side-nav");

// js to display SideBar and Animate Toggler
Toggler.addEventListener("click", () => {
  SideNav.classList.toggle("active");
  Toggler.classList.toggle("show");
});

//when a link is clicked, remove toggle menu
document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    SideNav.classList.remove("active");
  })
);
