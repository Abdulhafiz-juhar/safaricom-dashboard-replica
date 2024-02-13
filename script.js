const menuButton = document.querySelector(".menu");
let isFlipped = false;
menuButton.addEventListener("click", function () {
  isFlipped
    ? (this.style.transform = "scaleX(1)")
    : (this.style.transform = "scaleX(-1)");
  isFlipped = !isFlipped;
});
