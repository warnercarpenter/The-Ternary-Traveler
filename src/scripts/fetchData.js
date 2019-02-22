const fetchData = () => {
    return fetch (`http://localhost:8088/interests`)
        .then(res => res.json())
}

export default fetchData