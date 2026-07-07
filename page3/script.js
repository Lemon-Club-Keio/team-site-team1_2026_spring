const toTopButton = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  toTopButton.classList.toggle("is-visible", window.scrollY > 500);
});

toTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
