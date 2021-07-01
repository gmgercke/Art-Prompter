import { prompts } from "./resources.js";

const promptsHost = document.getElementById("prompts-host");
const contentToken = "{{CONTENT}}";
const placeholderTemplate = `<span class="placeholder">${contentToken}</span>`;

function handleButtonClick() {
  const checkedInput = document.querySelector(
    'input[type="radio"][name="inlineRadioOptions"]:checked'
  );
  if (checkedInput) {
    const selectedValue = checkedInput.value;
    const selectedPrompts = getRandomPromptsCount(selectedValue);

    if (selectedPrompts && selectedPrompts.length) {
      promptsHost.innerHTML = "";

      for (const selectedPrompt of selectedPrompts) {
        promptsHost.innerHTML += placeholderTemplate.replace(
          contentToken,
          selectedPrompt
        );
      }
    }
  }
}

function getRandomPromptsCount(count) {
  if (typeof count !== "number") {
    count = parseInt(count, 10);
  }

  if (isNaN(count)) {
    return null;
  }

  const result = [];

  if (count === 1) {
    result.push(prompts[0][Math.floor(Math.random() * prompts[0].length)]);
  } else if (count === 3) {
    result.push(prompts[0][Math.floor(Math.random() * prompts[0].length)]);
    result.push(prompts[1][Math.floor(Math.random() * prompts[1].length)]);
    result.push(prompts[3][Math.floor(Math.random() * prompts[3].length)]);
  } else {
    result.push(prompts[0][Math.floor(Math.random() * prompts[0].length)]);
    result.push(prompts[1][Math.floor(Math.random() * prompts[1].length)]);
    result.push(prompts[2][Math.floor(Math.random() * prompts[2].length)]);
    result.push(prompts[3][Math.floor(Math.random() * prompts[3].length)]);
    result.push(prompts[0][Math.floor(Math.random() * prompts[0].length)]);
  }

  return result;
}

document
  .getElementById("go-button")
  .addEventListener("click", handleButtonClick);
