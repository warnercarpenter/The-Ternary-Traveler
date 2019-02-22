const fetchPlaces = () => {
    return fetch (`http://localhost:8088/places`)
        .then(res => res.json())
}

export default fetchPlaces