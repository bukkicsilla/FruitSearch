const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple 🍎",
  "Apricot",
  "Avocado 🥑",
  "Banana 🍌",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry 🫐",
  "Boysenberry",
  "Currant",
  "Cherry 🍒",
  "Coconut 🥥",
  "Cranberry",
  "Cucumber 🥒",
  "Custard apple",
  "Damson",
  "Date ",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape 🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit 🥝",
  "Kumquat",
  "Lemon 🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango 🥭",
  "Mangosteen",
  "Marionberry",
  "Melon 🍈",
  "Cantaloupe",
  "Honeydew",
  "Watermelon🍉 ",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive 🫒",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine 🍊",
  "Papaya",
  "Passionfruit",
  "Peach 🍑",
  "Pear 🍐",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple 🍍",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry 🍓",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

/*function search(str) {
  let results = [];
  // TODO
  for (let fruit of fruits) {
    if (fruit.toLowerCase().includes(str) || fruit.includes(str)) {
      results.push(fruit);
    }
  }
  return results;
}*/

function search(str) {
  return fruits.filter((fruit) => fruit.toLowerCase().includes(str));
}

function searchHandler(e) {
  // TODO
  //to find Banana with searchterm bAnAnA for example
  const inputVal = e.target.value.toLowerCase();
  //const inputVal = e.target.value.toLowerCase(); // Convert input to lowercase
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

/*function showSuggestions(results, inputVal) {
  // TODO
  suggestions.innerHTML = "";
  if (inputVal) {
    for (let fruit of results) {
      const liEl = document.createElement("li");
      liEl.innerText = fruit;
      suggestions.appendChild(liEl);
    }
  }
}*/
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  if (inputVal) {
    results.forEach((fruit) => {
      const liElem = document.createElement("li");
      liElem.innerText = fruit;
      suggestions.appendChild(liElem);
    });
  }
}

function useSuggestion(e) {
  // TODO
  if (e.target.tagName === "LI") {
    input.value = e.target.innerText;
    suggestions.innerHTML = "";
  }
}

//why is input better than keyup?
//input.addEventListener("keyup", searchHandler);
input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
