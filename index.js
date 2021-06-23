let creatures = ["Human", "Elf", "Dwarf", "Orc"];
let animals = ["Cat", "Dog", "Chicken", "Duck"];
let plants = ["Tree", "Grass", "Bush", "Herb"];

function handleClickGo() {
  let randomCreatures = Math.floor(Math.random() * creatures.length);
  let randomAnimals = Math.floor(Math.random() * animals.length);
  let randomPlants = Math.floor(Math.random() * plants.length);
  let promptOne = document.querySelector(".prompt-1");
  let promptTwo = document.querySelector(".prompt-2");
  let promptThree = document.querySelector(".prompt-3");
  let promptFour = document.querySelector(".prompt-4");
  let promptFive = document.querySelector(".prompt-5");
  promptOne.innerHTML = creatures[randomCreatures];
  promptTwo.innerHTML = animals[randomAnimals];
  promptThree.innerHTML = plants[randomPlants];
}

let clickGo = document.querySelector(".go-button");
clickGo.addEventListener("click", handleClickGo);
