var myButton = document.getElementById("showPlanets");
var outDom = document.getElementById("planetHolder");
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "uranus", "neptune"];

var Planets = [
{
	name:"Mercury",
	url:""
},
{
	name:"Venus",
	url:""
},
{
	name:"Earth",
	url:""
},
{
	name:"Mars",
	url:""
},
{
	name:"Jupiter",
	url:""
},
{
	name:"Uranus",
	url:""
},
{
	name:"Neptune",
	url:""
}
];


function writeToDom (){
	outDom.innerHTML = "";
	for (var i=0; i<planets.length; i++)
 		{
 			var newPlanet="";
 			newPlanet += `<div class="planetBox", id="planetBox-${i}">`
 			newPlanet += `<div class="planetName"> ${Planets[i].name} </div>`; 
			newPlanet += `</div>`;
 			outDom.innerHTML += newPlanet; 
		}
	}

myButton.addEventListener("click", writeToDom);


