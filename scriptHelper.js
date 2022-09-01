// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById(
    "missionTarget"
  ).innerHTML = `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name} </li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons} </li>
  </ol>
  <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (!testInput) {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let hasErrors = false;
  list.style.visibility="hidden"
  document.getElementById("faultyItems").style.visibility = "hidden"
  if (validateInput(pilot) !== "Not a Number") {
    hasErrors = true;
  

    document.getElementById("pilotStatus").innerHTML =
      "Not enough pilot for the journey";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
  } else {
    document.getElementById(
      "pilotStatus"
    ).innerHTML = `Pilot ${pilot} is ready for launch`;
  }

  if (validateInput(copilot) !== "Not a Number") {
    hasErrors = true;
    document.getElementById("faultyItems").style.visibilty = "visible";
    document.getElementById("copilotStatus").innerHTML =
      "Not enough copilot for the journey";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
  } else {
    document.getElementById(
      "copilotStatus"
    ).innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }

  if (validateInput(fuelLevel) !== "Is a Number" || fuelLevel < 10000) {
    hasErrors = true;
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level too low for launch";
  } else {
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level high enough for launch";
  }

  if (validateInput(cargoLevel) !== "Is a Number" || cargoLevel > 10000) {
    hasErrors = true;
    document.getElementById("cargoStatus").innerHTML =
      "Cargo mass too heavy for launch"
  } else {
    document.getElementById("cargoStatus").innerHTML =
      "Cargo mass low enough for launch";
  }
  if (!hasErrors) {
    document.getElementById("launchStatus").innerHTML =
      "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
  } else {
    document.getElementById("faultyItems").style.visibility = "visible";

    // list.style.visibilty = "visible";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
  }
}

async function myFetch() {
  let planetsReturned;

   planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * 6)];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
