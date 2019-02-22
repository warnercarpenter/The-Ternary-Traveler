const buildHTML = (object) => {
    return `
        <div id="interest--${object.id}" class="interest">
            <p class="interestTitle">${object.name}</p>
            <p class="interestDescription">${object.description}</p>
            <button id="delete--${object.id}">Delete</button>
        </div>
        <hr/>
    `
}

export default buildHTML