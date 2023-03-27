const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log("got the data");
      console.log(json);
      image.src = json.message;
    });
});
