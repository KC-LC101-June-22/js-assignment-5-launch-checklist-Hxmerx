// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let faultyItemList = document.getElementById("faultyItems");
  faultyItemList.style.visibility = "hidden";
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
  let submitButton = document.getElementById("formSubmit");
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    let faultyItemList = document.getElementById("faultyItems");
    let pilot = document.getElementById("pilotName")?.value;
    let coPilot = document.getElementById("copilotName")?.value;
    let cargoMass = document.getElementById("cargoMass")?.value;
    let fuelLevel = document.getElementById("fuelLevel")?.value;

    formSubmission(
      document,
      faultyItemList,
      pilot,
      coPilot,
      fuelLevel,
      cargoMass
    );
  });
});
