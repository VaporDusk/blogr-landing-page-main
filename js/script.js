const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
const navListItemText = document.getElementsByClassName("nav-list-item-text");
const navListItemList = document.getElementsByClassName("nav-list-item-list");
const navListItemArrow = document.getElementsByClassName("nav-list-item-arrow");

let id = null;
let navHeight = nav.offsetHeight;
let currentNavHeight = null;

if (window.innerWidth >= 1440) {
  for (let i = 0; i < navListItemArrow.length; i++) {
    navListItemArrow[i].src = "images/icon-arrow-light.svg";
  }
} else {
  for (let i = 0; i < navListItemArrow.length; i++) {
    navListItemArrow[i].src = "images/icon-arrow-dark.svg";
  }
}

window.onresize = windowResizing;

function windowResizing () {
  if (window.innerWidth >= 1440) {
    for (let i = 0; i < navListItemArrow.length; i++) {
      if (navListItemArrow[i].src.includes("dark")) {
        navListItemArrow[i].src = navListItemArrow[i].src.replace("dark", "light")
      }
    }
  } else {
    for (let i = 0; i < navListItemArrow.length; i++) {
      if (navListItemArrow[i].src.includes("light")) {
        navListItemArrow[i].src = navListItemArrow[i].src.replace("light", "dark")
      }
    }
  }
}

menuBtn.onclick = toggleMenu;

function toggleMenu () {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
}

for (let i = 0; i < navListItemText.length; i++) {
  navListItemText[i].onclick = () => {
    if (navListItemText[i].classList.value.includes("active")) {
      navListItemText[i].classList.remove("active");
      navListItemList[i].classList.remove("active");
      navListItemArrow[i].classList.remove("active");
    } else {
      for (let j = 0; j < navListItemText.length; j++) {
        if (navListItemText[j].classList.value.includes("active")) {
          navListItemText[j].classList.remove("active");
          navListItemList[j].classList.remove("active");
          navListItemArrow[j].classList.remove("active");
        }
      }
      navListItemText[i].classList.add("active");
      navListItemList[i].classList.add("active");
      navListItemArrow[i].classList.add("active");
    }
  }
}