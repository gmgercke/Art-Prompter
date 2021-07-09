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
        promptsHost.innerHTML += placeholderTemplate
          .replace(contentToken, selectedPrompt)
          .toLowerCase();
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
    const flattenedPromptsAll = prompts.toString().split(",");
    result.push(
      flattenedPromptsAll[
        Math.floor(Math.random() * flattenedPromptsAll.length)
      ]
    );
  } else if (count === 3) {
    const flattenedPromptsPartial = prompts[2].toString().split(",");
    result.push(prompts[0][Math.floor(Math.random() * prompts[0].length)]);
    result.push(prompts[1][Math.floor(Math.random() * prompts[1].length)]);
    result.push(
      flattenedPromptsPartial[
        Math.floor(Math.random() * flattenedPromptsPartial.length)
      ]
    );
  } else {
    const flattenedPromptsPartial = prompts[2].toString().split(",");
    result.push(prompts[0][Math.floor(Math.random() * prompts[0].length)]);
    result.push(prompts[1][Math.floor(Math.random() * prompts[1].length)]);
    result.push(
      flattenedPromptsPartial[
        Math.floor(Math.random() * flattenedPromptsPartial.length)
      ]
    );
    result.push(
      flattenedPromptsPartial[
        Math.floor(Math.random() * flattenedPromptsPartial.length)
      ]
    );
    result.push(
      flattenedPromptsPartial[
        Math.floor(Math.random() * flattenedPromptsPartial.length)
      ]
    );
  }

  return result;
}

document
  .getElementById("go-button")
  .addEventListener("click", handleButtonClick);
