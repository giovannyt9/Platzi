const fetchData = require("../utils/fetchData.js")

let urlAPICharacters = "https://rickandmortyapi.com/api/character/";

fetchData(urlAPICharacters)
    .then(data1 => {
        console.log(data1.info.count);
        return fetchData(urlAPICharacters + data1.results[1].id)
    })
    .then(data2 => {
        console.log(data2.name);
        return fetchData(data2.origin.url)
    })
    .then(data3 => {
        console.log(data3.dimension);
    })
    .catch(err => console.log(err))


// Promise.all([somethingWillHappen2(), somethingWillHappen()])
//     .then(response => console.log("Array of results", response))
//     .catch(err => console.log("Array of Errors", err))