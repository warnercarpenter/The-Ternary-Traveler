const addForm = () => {
    return `
    <div id="addForm" class="addForm">
        <p>Name:</p>
        <input type="text" id="addFormName"></input><br/>
        <p>Description:</p>
        <textarea id="addFormDescription"></textarea><br/>
        <p>Location:</p>
        <select id="addFormPlace">
            <option value="1">Italy</option>
            <option value="2">Switzerland</option>
            <option value="3">France</option>
        </select><br/>
        <button id="save">Save</button>
    </div>
    `
}

export default addForm