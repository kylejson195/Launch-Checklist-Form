// Write your JavaScript code here!

window.addEventListener("load", function() {
   //window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
          response.json().then( function(json){
             console.log(json)
  //        const missionTarget = document.getElementById("missionTarget")
          const div = document.getElementById('missionTarget') ;
               div.innerHTML = `
                   <ul>
                       <li>Name: ${json[0].name}</li>
                       <li>Diameter: ${json[0].diameter}</li>
                       <li>Star: ${json[0].star}</li>
                       <li>Distance from Earth: ${json[0].distance}</li>
                       <li>Number of Moons: ${json[0].moons}</li>
                   </ul>
                      <img src="${json[0].image}">
                                               `;                         
                          });
                      });
                     
                 
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {     
      if ((fuelLevelInput.value === "") || (cargoMassInput === "")  || (pilotNameInput.value === "") || (copilotNameInput.value === "")) {
         console.log('First if statement') 
         alert ("All Fields Required");         
       }
      else if (isNaN(fuelLevelInput.value)  || isNaN(cargoMassInput.value) || !isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
         console.log('Second if statement') 
         alert ("Please enter valid data");        
       }
      let newPilotStatus = document.querySelector("#pilotStatus")   
      newPilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`; 
      
      let newCopilotStatus = document.querySelector("#copilotStatus")
      newCopilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
      
      let faultyItems = document.querySelector("#faultyItems")
     
      let newLaunchStatus = document.querySelector("#launchStatus")
      let newFuelStatus = document.querySelector("#fuelStatus")
       newFuelStatus.innerHTML = `${fuelLevelInput.value}`;
       if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible" ;
         newFuelStatus.innerHTML = "Not Enough Fuel for Journey";
         newLaunchStatus.style.color = "red" ;
         newLaunchStatus.innerHTML = "Shuttle not ready for launch" ;
       };

      let newCargoMass = document.querySelector("#cargoStatus");
      newCargoMass.innerHTML = `${cargoMassInput.value}` ;
         if (cargoMassInput.value > 10000){
            faultyItems.style.visibility = "visible" ;
            newLaunchStatus.style.color = "red" ;
            newLaunchStatus.innerHTML = "Shuttle not ready for launch" ;
            newCargoMass.innerHTML = "Too much mass for shuttle takeoff";
         }     

       else if (cargoMassInput.value < 10000 && fuelLevelInput.value > 10000) {
          newLaunchStatus.style.color = "green";
          newLaunchStatus.innerHTML = "Shuttle Is Ready for Launch";
       }  
      event.preventDefault();
   });
   

  
});





//  <script>
//    window.addEventListener("load", function() {
//     fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
//         response.json().then( function(json){
//            console.log("Hello");
//         const div = document.getElementById('missionTarget') ;
//              div.innerHTML = `
//                  <ul>
//                      <li>Name: ${json.name[0]}</li>
//                      <li>Diameter: ${json.diameter[0]}</li>
//                      <li>Star: ${json.star[0]}</li>
//                      <li>Distance from Earth: ${json.distance[0]}</li>
//                      <li>Number of Moons: ${json.moons[0]}</li>
//                  </ul>
//                     <img src="${json.image[0]}">
//                                              `;                         
//                         });
//                     });
//                 });
//                 </script>
// This block of code shows how to format the HTML once you fetch some planetary JSON!
/*<h2>Mission Destination</h2>

<script>
   window.addEventListener("load", function() {
                    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
                        response.json().then ( function(json){
                        const div = document.getElementById("missionTarget") ;
                        div.innerHTML = `
                                       <ol>
                                          <li>Name: ${json.name.0}</li>
                                          <li>Diameter: ${json.diameter.0}</li>
                                          <li>Star: ${json.star.0}</li>
                                          <li>Distance from Earth: ${json.distance.0}</li>
                                          <li>Number of Moons: ${}</li>
                                       </ol>
                                       <img src="${image.0}">
                                             `;   
                        })
                    })
                })
</script>
*/
