import printToDOM from "./printToDOM"
import fetchData from "./fetchData";
import buildHTML from "./buildHTML";
import fetchPlaces from "./fetchPlaces";

const dashboardReload = () => {

    const output = document.getElementById("output")

    document.getElementById("formContainer").innerHTML = ""

    if (output.classList.contains("hidden")) {
        output.classList.remove("hidden")
    }

    fetchPlaces()
    .then(places => {
        document.getElementById("firstTitle").innerHTML = places[0].name
        document.getElementById("secondTitle").innerHTML = places[1].name
        document.getElementById("thirdTitle").innerHTML = places[2].name
    })

    fetchData()
    .then(interests => {
        document.getElementById("firstDisplay").innerHTML = ""
        document.getElementById("secondDisplay").innerHTML = ""
        document.getElementById("thirdDisplay").innerHTML = ""
        interests.forEach(interest => {
            const html = buildHTML(interest)
            if (interest.placeId === 1) {
                printToDOM(html, "firstDisplay")
            }
            if (interest.placeId === 2) {
                printToDOM(html, "secondDisplay")
            }
            if (interest.placeId === 3) {
                printToDOM(html, "thirdDisplay")
            }
        })
    })
}

export default dashboardReload