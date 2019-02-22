import dashboardReload from "./dashboardReload";

const deleteInterest = (id) => {
        fetch(`http://localhost:8088/interests/${id}`, {
                method: "DELETE"
        })
        .then(dashboardReload)
}

export default deleteInterest