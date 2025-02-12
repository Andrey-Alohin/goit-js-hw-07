const inputName = document.querySelector("#name-input");
console.log(inputName);
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
    if ((event.currentTarget.value).replace(/ /g, "").length !== 0) {
        outputName.textContent = event.currentTarget.value.trim();
        inputName.value = event.currentTarget.value.trim();
    } else {
        inputName.value = "";
        outputName.textContent = "Anonymous";
    }
})