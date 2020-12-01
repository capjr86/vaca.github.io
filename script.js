document
    .querySelector("input")
    .addEventListener("submit", handle)

function handle(event) {
    event.preventDefault();
}


var destName = EventTarget.elements["name"];
var destLocation = EventTarget.element["location"].value;
var destPhoto = EventTarget.elements["photo"]
var destDesc = EventTarget.elements["description"]


var destinationDetails = (destName, destLocation, destPhoto, destDesc)

function addDetails(destinationDetails) {
    document.createElement("div") = destinationDetails;
    document.getElementById("details").appendChild("")
}