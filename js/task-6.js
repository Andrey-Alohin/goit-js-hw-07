function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

function destroyBoxes() {
  let boxes = container.querySelectorAll("div");
  for (const box of boxes) {
    box.remove();
  }
}

function createBoxes() {
  let amount = input.value;
  const markUp = [];
  if (1 <= amount && amount <= 100) {
    destroyBoxes();
    let size = 30;
    for (let i = 0; i < amount; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    markUp.push(newDiv);
    size += 10;
    }
  }
  container.append(...markUp);
  amount = ""
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);