function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const buttonChange = document.querySelector(".change-color");
buttonChange.addEventListener("click", event => {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = `${newColor}`;
  document.querySelector(".color").textContent = newColor;
})
