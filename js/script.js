/* Nav open/close button */
const closeButton = document.querySelector(".close");
const openButton = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
closeButton.onclick = function () {
  event.stopPropagation();
  nav.style.display = "none";
  closeButton.style.display = "none";
};
openButton.onclick = function () {
  event.stopPropagation();
  nav.style.display = "block";
  closeButton.style.display = "block";
};
