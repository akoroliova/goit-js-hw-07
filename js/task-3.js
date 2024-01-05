const inputElement = document.querySelector("input#name-input");
const outputElement = document.querySelector("span#name-output");

inputElement.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  outputElement.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
});
