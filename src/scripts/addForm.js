const addForm = (places) => {
    let formHTML = `
    <div id="addForm" class="addForm">
        <p>Name:</p>
        <input type="text" id="addFormName"></input><br/>
        <p>Description:</p>
        <textarea id="addFormDescription"></textarea><br/>
        <p>Location:</p>
        <select id="addFormPlace">
    `
    places.forEach(place => {
        formHTML += `<option value="${place.id}">${place.name}</option>`
    })

    formHTML += `
        </select><br/>
        <button id="save">Save</button>
    </div>
    `

    return formHTML
}

export default addForm