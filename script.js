const menuButton = document.querySelector(".menu");
let isFlipped = false;

let textElements = document.querySelectorAll(".text");
let logoElements = document.querySelectorAll(".logoMenu .logo");
let nameElements = document.querySelectorAll(".userDetails .name");
let emailElements = document.querySelectorAll(".userDetails .email");

let sidebarDivsWithChildren = document.querySelectorAll(
  ".sidebar div:has(> div)"
);
let containerElement = document.querySelector(".container");
let logoMenuElement = document.querySelector(".logoMenu");

menuButton.addEventListener("click", function () {
  if (isFlipped) {
    this.style.transform = "scaleX(1)";
  } else {
    this.style.transform = "scaleX(-1)";
    textElements.forEach(function (element) {
      element.style.display = "none";
      element.style.width = "0";
      element.style.height = "0";
    });

    logoElements.forEach(function (element) {
      element.style.display = "none";
      element.style.width = "0";
      element.style.height = "0";
    });

    nameElements.forEach(function (element) {
      element.style.display = "none";
      element.style.width = "0";
      element.style.height = "0";
    });

    emailElements.forEach(function (element) {
      element.style.display = "none";
      element.style.width = "0";
      element.style.height = "0";
    });
    sidebarDivsWithChildren.forEach(function (element) {
      element.style.justifyItems = "center";
    });
    containerElement.style.gridTemplate = "1fr 18fr / auto 10fr";
    containerElement.style.gridTemplateAreas =
      '"sidebar navbar" "sidebar main"';
    logoMenuElement.style.gridTemplateColumns = "auto";
  }

  isFlipped = !isFlipped;
});
