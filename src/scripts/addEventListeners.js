import deleteInterest from "./deleteInterest"
import saveInterest from "./saveInterest"
import addForm from "./addForm"
import dashboardReload from "./dashboardReload";

const addEventListeners = () => {
    const listenerBlock = document.getElementById("titleAndContent")
    listenerBlock.addEventListener("click", function(event) {
        if (event.target.nodeName === "BUTTON") {
            const idArray = event.target.id.split("--")
            if (event.target.id === "add") {
                const output = document.getElementById("output")
                output.classList.add("hidden")
                document.getElementById("formContainer").innerHTML = addForm()
            }
            if (idArray[0] === "delete") {
                if (confirm("Are you sure you want to delete this point of interest?")) {
                    deleteInterest(idArray[1])
                } else {
                    dashboardReload()
                }
            }
            if (idArray[0] === "save") {
                saveInterest()
            }
        }
    })
}

export default addEventListeners