let box = document.getElementById("box");
function displayCard() {

  let nameInput = document.getElementById("nameInput");
  let ageInput = document.getElementById("ageInput");
  let countryInput = document.getElementById("countryInput");
  let color = document.getElementById("colorInput");
  if (nameInput.value.length < 2)
    return;
  if (ageInput.value < 0)
    return;
  let valueName = nameInput.value;
  let valueAge = ageInput.value;
  let valueCountry = countryInput.value;

  console.log(`Name: ${valueName}, age: ${valueAge}, country: ${valueCountry}`)
  createCard(valueName, valueAge, color.value, valueCountry);
  nameInput.value = "";
  ageInput.value = "";
  colorInput.value = "#174485";
  countryInput.value = "";


}
function createCard(name, age, color, country) {
  console.log(`Name: ${name}, age: ${age}, country: ${country}`)
  let card = document.createElement("div");
  card.classList.add('card');
  card.style.backgroundColor = color;

  let list = document.createElement("ul");
  list.classList.add('list-group');
  card.appendChild(list);
  let liName = document.createElement("li");
  let liAge = document.createElement("li");
  let liCountry = document.createElement("li");
  liName.id = "name";
  liAge.id = "age";
  liCountry.id = "country";

  liName.innerHTML = name;
  liAge.innerHTML = country;
  liCountry.innerHTML = age;
  list.appendChild(liName);
  list.appendChild(liAge);
  list.appendChild(liCountry);

  document.getElementById('box').appendChild(card);


}