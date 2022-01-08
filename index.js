const iconClassName = "bi bi-suit-heart-fill";
function goToThisLink() {
  window.open("https://google.com", "_blank");
}
function createIcon() {
  let icon = document.createElement("i");
  iconClassName.split(" ").map((elem) => {
    icon.classList.add(elem);
  });

  icon.addEventListener("click", goToThisLink);
  return icon;
}

let icon = createIcon();
document.body.appendChild(icon);
