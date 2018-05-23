var c1 = document.querySelector('#color1');
var c2 = document.querySelector('#color2');
var css = document.querySelector("h3");
var body = document.querySelector("body");

function set_gradient(n)
{
body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";	
console.log(n);

css.textContent = body.style.background + ";";
}

color1.addEventListener("input", set_gradient);

color2.addEventListener("input", set_gradient);