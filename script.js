// Write your JavaScript code here!


window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
       
      if (pilotNameInput.value === "" || copilotNameInput.value === "") {
         console.log('First if statement') 
         alert ("Please enter valid names");
          event.preventDefault();
       }
       if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         console.log('Second if statement') 
         alert ("Please enter valid data");
          event.preventDefault();
       }
      });
   });


 /*This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
window.addEventListener("load", function() {
                    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
                        response.json().then ( function(json){
                            const div = document.getElementById("launchStatus")
                        })
                    })
                })

<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
