import dashboardReload from "./dashboardReload";

const saveInterest = () => {
    const interestObject = {}
    interestObject.name = document.getElementById("addFormName").value
    interestObject.description = document.getElementById("addFormDescription").value
    interestObject.placeId = parseInt(document.getElementById("addFormPlace").value)
    fetch(`http://localhost:8088/interests`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interestObject)
    })
        .then(dashboardReload)
}

export default saveInterest