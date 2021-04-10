const category = document.getElementById("category");
const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const jokeBtn = document.getElementById("joke-btn");
jokeBtn.addEventListener("click", getRandomJoke);
function renderJoke(data) {
  setup.textContent = data.setup;
  category.textContent = data.category;
  delivery.textContent = data.delivery;
}
function getRandomJoke() {
  fetch(`https://v2.jokeapi.dev/joke/Any`)
    .then(response => response.json())
    .then(data => {
      renderJoke(data);
      console.log(data);
    });
}
getRandomJoke();
