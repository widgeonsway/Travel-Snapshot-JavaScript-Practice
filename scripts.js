"use strict";

const amsterdamFunction = function () {
  title.textContent = "Amsterdam";
  description.textContent = "This is Amsterdam";
  document.getElementById("image").src = "destination1.png";
  document.getElementById("image").alt =
    "A picture of canal boats and a church";
  document.body.classList.add("amsterdam");
  document.body.classList.remove("ireland");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ghent");
};

const bathFunction = function () {
  title.textContent = "Bath";
  description.textContent = "This is Bath";
  document.getElementById("image").src = "destination2.png";
  document.getElementById("image").alt = "A picture of the Roman baths in Bath";
  document.body.classList.add("bath");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("ireland");
  document.body.classList.remove("london");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ghent");
};

const londonFunction = function () {
  title.textContent = "London";
  description.textContent = "This is Camden Town in London";
  document.getElementById("image").src = "destination3.png";
  document.getElementById("image").alt =
    "A picture of a house boat on a tiny river";
  document.body.classList.add("london");
  document.body.classList.remove("ireland");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ghent");
};

const antwerpFunction = function () {
  title.textContent = "Antwerp";
  description.textContent = "This is Antwerp";
  document.getElementById("image").src = "destination4.png";
  document.getElementById("image").alt =
    "A picture of the old buildings in Antwerp";
  document.body.classList.add("antwerp");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("ireland");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ghent");
};

const brusselsFunction = function () {
  title.textContent = "Brussels";
  description.textContent = "This is Grand Place in Brussels";
  document.getElementById("image").src = "destination5.png";
  document.getElementById("image").alt =
    "A picture of the buildings in Grand Place in Brussels";
  document.body.classList.add("brussels");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("ireland");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ghent");
};

const parisFunction = function () {
  title.textContent = "Paris";
  description.textContent = "This is the bottom of Sacre-Coeur in Paris ";
  document.getElementById("image").src = "destination6.png";
  document.getElementById("image").alt =
    "A picture of a merry go round and the church behind it ";
  document.body.classList.add("paris");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("brussels");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ireland");
  document.body.classList.remove("ghent");
};

const brugesFunction = function () {
  title.textContent = "Bruges";
  description.textContent = "This is Bruges";
  document.getElementById("image").src = "destination7.png";
  document.getElementById("image").alt = "A picture of the skinniest church";
  document.body.classList.add("bruges");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("ireland");
  document.body.classList.remove("ghent");
};

const ghentFunction = function () {
  title.textContent = "Ghent";
  description.textContent = "This is ghent";
  document.getElementById("image").src = "destination8.png";
  document.getElementById("image").alt =
    "A picture of the famous buildings in Ghent next to the water";
  document.body.classList.add("ghent");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("antwerp");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ireland");
};

const irelandFunction = function () {
  title.textContent = "Ireland";
  description.textContent = "This is the river and castle in Kilkenny";
  document.getElementById("image").src = "destination9.png";
  document.getElementById("image").alt =
    "A picture of the side of the Kilkenny castle next to the water with a swan ";
  document.body.classList.add("ireland");
  document.body.classList.remove("amsterdam");
  document.body.classList.remove("bath");
  document.body.classList.remove("london");
  document.body.classList.remove("brussels");
  document.body.classList.remove("paris");
  document.body.classList.remove("bruges");
  document.body.classList.remove("ghent");
  document.body.classList.remove("antwerp");
};

const btnRandom = document.querySelector("#btn-random-destination");

btnRandom.addEventListener("click", function () {
  //Generate a random dice roll
  const destination = Math.trunc(Math.random() * 9) + 1;
  //display dice
  if (destination === 1) amsterdamFunction();
  else if (destination === 2) bathFunction();
  else if (destination === 3) londonFunction();
  else if (destination === 4) antwerpFunction();
  else if (destination === 5) brusselsFunction();
  else if (destination === 6) parisFunction();
  else if (destination === 7) brugesFunction();
  else if (destination === 8) ghentFunction();
  else if (destination === 9) irelandFunction();
});

amsterdam.addEventListener("click", amsterdamFunction);
bath.addEventListener("click", bathFunction);
london.addEventListener("click", londonFunction);
antwerp.addEventListener("click", antwerpFunction);
brussels.addEventListener("click", brusselsFunction);
paris.addEventListener("click", parisFunction);
bruges.addEventListener("click", brugesFunction);
ghent.addEventListener("click", ghentFunction);
ireland.addEventListener("click", irelandFunction);
