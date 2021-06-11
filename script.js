// Write your JavaScript code here!


window.addEventListener('load', function() {

   //do form stuff on here and you can .innerhtml the form results into part 3
   
   //select form
   const form = document.getElementById('launchForm');
   
   
   //get pilot and co-pilot
   const pilot = document.getElementById('pilotName');
   const coPilot = document.getElementById('copilotName');
   const fuelLvl = document.getElementById('fuelLevel');
   const cargoKg = document.getElementById('cargoMass');
   const statusCheck = document.getElementById('launchStatusCheck');
   let launchStat = document.getElementById('launchStatus');
   
   
   // this is the launchStatusCheck I predeclared for later use
   const faultyItems = document.getElementById("faultyItems");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   
   

   //for the form   
   //get all status info
   form.addEventListener('submit', (event) => { 
      event.preventDefault();
      //check required fields
      let formIsValid;
      // input validation for text boxes
      if(pilot.value === "" || coPilot.value === "" || fuelLvl.value === "" || cargoKg.value === ""){
        alert('Please enter all fields');
      }
      // input validation looks to make sure strings and numbers are in correct location 
      //I couldve written !isNaN() but i rather not risk my sanity
      else if (isNaN(pilot.value) === false || isNaN(coPilot.value) === false || isNaN(fuelLvl.value) === true || isNaN(cargoKg.value) === true){
         alert('Please enter valid Information');
      }
      else{
         // measure input values and will be the bottom part of the page as per input but will require a page refresh after each submission.

            if(fuelLvl.value < 10000){
               // this is to update that <h2></h2> tag on the 3rd part
               launchStat.style.color = "red";
               //make sure to add these to view and update the bottom part of the page
               faultyItems.style.visibility = 'visible';
               pilotStatus.innerText = `${pilot.value} ready is ready for launch`;
               copilotStatus.innerText = `${coPilot.value} ready is ready for launch`;
               launchStat.innerText = "Shuttle not ready for launch";
               fuelStatus.innerText ='Fuel level is not enough for the journey';
               }
            else if(cargoKg.value > 10000){
               launchStat.style.color = "red";
               faultyItems.style.visibility = 'visible';
               pilotStatus.innerText = `${pilot.value} ready is ready for launch`;
               copilotStatus.innerText = `${coPilot.value} ready is ready for launch`;
               launchStat.innerText = "Shuttle not ready for launch";
               cargoStatus.innerText ='Shuttle mass is too high for the journey';       
               }

            else {
               faultyItems.style.visibility = 'visible';
               launchStat.style.color = "green";
               launchStat.innerText = 'Shuttle is ready for launch';
               pilotStatus.innerText = `Pilot ${pilot.value} ready is ready for launch`;
               copilotStatus.innerText = `Co-pilot ${coPilot.value} ready is ready for launch`;
               fuelStatus.style.visibility = 'hidden';
               cargoStatus.style.visibility = 'hidden';
               }

      }
      
   
      //console.logs cause why not 
      console.log(pilot.value);
      console.log(fuelLvl.value);

   });
   
   


   //this here is the Picture at the top of the page
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       response.json().then(function(json){
       
       const missionTarget = document.getElementById("missionTarget");
         //  let index = 0;
         // eureka moment I figure this part randomizes the pictures with every click
         let index = Math.floor(Math.random() * json.length);
         //missionTarget.addEventListener("click", function(){
         missionTarget.innerHTML = `
            <div>
               <center>
               <h2>Mission Destination</h2>
                  <ol>
                      <li>Name: ${json[index].name}</li>
                      <li>Diameter: ${json[index].diameter}</li>
                      <li>Star: ${json[index].star}</li>
                     <li>Distance from Earth: ${json[index].distance}</li>
                     <li>Number of Moons: ${json[index].moons}</li>
                  </ol>
                <img src="${json[index].image}">
                </center>
             </div>
            `;
            
            // index = (index + 1) % json.length;
         //});
       });  
   });
   
});
//submit button control




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${json[index].image}</li>
</ol>
<img src="${}">
*/
