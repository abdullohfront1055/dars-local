let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");

p.textContent = localStorage.getItem("ism");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let value = input.value;

    localStorage.setItem("ism", value);

    p.textContent = localStorage.getItem("ism")

});