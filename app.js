const toggleButton = document.getElementsByClassName("toggle")[0];
const links = document.getElementsByClassName("links")[0];
const auth = document.getElementsByClassName("authorbox")[0];
const close = document.getElementsByClassName("close")[0];

toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
  auth.classList.toggle("inactive");
  close.classList.toggle("active");
});
close.addEventListener("click", () => {
  links.classList.toggle("inactive");
  auth.classList.toggle("active");
  close.classList.toggle("inactive");
});
