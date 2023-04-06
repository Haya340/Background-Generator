var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";

	css.textContent = body.style.background ;
}

color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)

const array = [1,2,3,4,5];
const double=[];
const newArray = array.forEach((num)=> {
	num*2;
})