import printToDOM from "./printToDOM"
import fetchData from "./fetchData";
import buildHTML from "./buildHTML";

const dashboardReload = () => {

    const output = document.getElementById("output")

    document.getElementById("formContainer").innerHTML = ""

    if (output.classList.contains("hidden")) {
        output.classList.remove("hidden")
    }

    fetchData()
    .then(interests => {
        document.getElementById("italyDisplay").innerHTML = ""
        document.getElementById("switzerlandDisplay").innerHTML = ""
        document.getElementById("franceDisplay").innerHTML = ""
        interests.forEach(interest => {
            const html = buildHTML(interest)
            if (interest.placeId === 1) {
                printToDOM(html, "italyDisplay")
            }
            if (interest.placeId === 2) {
                printToDOM(html, "switzerlandDisplay")
            }
            if (interest.placeId === 3) {
                printToDOM(html, "franceDisplay")
            }
        })
    })
}

export default dashboardReload