const printToDOM = (what, where) => {
    document.getElementById(where).innerHTML += what
}

export default printToDOM