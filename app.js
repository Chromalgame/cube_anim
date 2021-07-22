const cube = document.querySelector(".cube");
const valeur_x = document.querySelector(".valeur_x");
const valeur_y = document.querySelector(".valeur_y");
const reset = document.querySelector(".reset");
const x = document.querySelector("#range_x"),
  y = document.querySelector("#range_y");

cube.style.transform = "rotateX(" + x.value + "deg)" + "rotateY(" + y.value + "deg)";

x.addEventListener(
  "input",
  function () {
    cube.style.transform = "rotateX(" + x.value + "deg)" + "rotateY(" + cube.style.transform.slice(-4 + -y.value.length, -4) + "deg)";
    valeur_x.innerHTML = x.value + "°";
  },
  false
);

y.addEventListener(
  "input",
  function () {
    cube.style.transform = "rotateX(" + cube.style.transform.slice(8, 8 + x.value.length) + "deg)" + "rotateY(" + y.value + "deg)";
    valeur_y.innerHTML = y.value + "°";
  },
  false
);

reset.addEventListener("click", () => {
    x.value = 0;
    y.value = 0;

    valeur_x.innerHTML = x.value + "°";
    valeur_y.innerHTML = y.value + "°";

    cube.style.transform = "rotateX(" + x.value + "deg)" + "rotateY(" + y.value + "deg)";
})