var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var css = document.querySelector("h3");
var body = document.querySelector("body");
var btn = document.querySelector("#btn");


function set_gradient(n)
{
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";	

	console.log(n);

	css.textContent = body.style.background + ";";
}

function random_color(n)
{
	console.log(n);

	color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	color2.value =  '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	set_gradient(n);

}

color1.addEventListener("input", set_gradient);

color2.addEventListener("input", set_gradient);

btn.addEventListener( "click", random_color);