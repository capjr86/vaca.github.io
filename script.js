document
    .querySelector("input")
    .addEventListener("submit", function (event) {
        event.preventDefault()
    })

var destName = this.document.getElementById["name"]
var destLocation = this.document.getElementById["location"]
var destPhoto = this.document.getElementById["photo"]
var destDesc = this.document.getElementById["description"]


var destinationDetails = (destName, destLocation, destPhoto, destDesc)

let para = document.createElement("p")
para.innerHTML = destinationDetails;
document.getElementById("details").appendChild(para)