let nameInput = document.getElementById("nameInput");
let firstName = document.getElementById("name");
let ageInput = document.getElementById("ageInput");
let age = document.getElementById("age");
let countryInput = document.getElementById("countryInput");
let country = document.getElementById("country");
let color = document.getElementById("colorInput");
let box = document.getElementById("box");
let card1 = document.getElementById("card1");
function displayCard() {
  if (nameInput.value.length < 2) return;
  if (ageInput.value < 0) return;
  let currentCard;
  card1.classList.remove("d-none");
  let valueName = nameInput.value;
  let valueAge = ageInput.value;
  let valueCountry = countryInput.value;
  firstName.innerHTML = valueName;
  age.innerHTML = valueAge;
  country.innerHTML = valueCountry;
  card1.style.backgroundColor = color.value;
  currentCard = card1.innerHTML;
  box.appendChild(currentCard);
  console.log(currentCard);

  console.log(card1);
  console.log(box);

  nameInput.value = "";
  ageInput.value = "";
  colorInput.value = "#174485";
  countryInput.value = "";
}
