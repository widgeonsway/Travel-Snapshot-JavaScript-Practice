"use strict";

const cityDestinations = [
  {
    name: "amsterdam",
    title: "Amsterdam",
    description: "This is Amsterdam",
    src: "destination1.png",
    alt: "A picture of canal boats and a church",
  },
  {
    name: "bath",
    title: "Bath",
    description: "This is Bath",
    src: "destination2.png",
    alt: "A picture of the Roman Baths in Bath",
  },
  {
    name: "london",
    title: "London",
    description: "This is Camden Town",
    src: "destination3.png",
    alt: "A picture of house boats on the river",
  },
  {
    name: "antwerp",
    title: "Antwerp",
    description: "This is Antwerp",
    src: "destination4.png",
    alt: "A picture of Antwerp",
  },
  {
    name: "brussels",
    title: "Brussels",
    description: "This is Brussels",
    src: "destination5.png",
    alt: "A picture of Brussels",
  },
  {
    name: "paris",
    title: "Paris",
    description: "This is Paris",
    src: "destination6.png",
    alt: "A picture of Paris",
  },
  {
    name: "bruges",
    title: "Bruges",
    description: "This is Bruges",
    src: "destination7.png",
    alt: "A picture of Bruges",
  },
  {
    name: "ghent",
    title: "Ghent",
    description: "This is Ghent",
    src: "destination8.png",
    alt: "A picture of Ghent",
  },
  {
    name: "kilkenny",
    title: "Kilkenny",
    description: "This is Kilkenny",
    src: "destination9.png",
    alt: "A picture of Kilkenny",
  },
];

const city = cityDestinations.map((destination) => destination.title);

cityDestinations.forEach(function (destination) {
  const destinationFunction = function () {
    title.textContent = destination.title;
    description.textContent = destination.description;
    document.getElementById("image").src = destination.src;
    document.getElementById("image").alt = destination.alt;
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(destination.name);
  };

  document
    .getElementById(destination.name)
    .addEventListener("click", destinationFunction);
});
//remember to ask if 71-78 and 88-99 can be done the same
const btnRandom = document.querySelector("#btn-random-destination");

btnRandom.addEventListener("click", function () {
  const randomDestination = Math.trunc(Math.random() * cityDestinations.length);
  const randomMatch = cityDestinations[randomDestination];

  title.textContent = randomMatch.title;
  description.textContent = randomMatch.description;
  document.getElementById("image").src = randomMatch.src;
  document.getElementById("image").alt = randomMatch.alt;

  document.body.classList.remove(...document.body.classList);
  document.body.classList.add(randomMatch.name);
});
