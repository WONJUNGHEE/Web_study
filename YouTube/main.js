const moreBtn = document.querySelector(".info .moreBtn");
const title = document.querySelector(".info .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
