//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#hamburgermenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar navbar untuk menghilangkan nav
const menu = document.querySelector("#hamburgermenu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
