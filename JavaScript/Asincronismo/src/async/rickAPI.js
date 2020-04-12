const fetchData = require("../utils/fetchData.js")

const urlAPICharacters = "https://rickandmortyapi.com/api/character/";

const asyncFunction = async () => {
    try {
        const data1 = await fetchData(urlAPICharacters);
        const data2 = await fetchData(urlAPICharacters + data1.results[1].id);
        const data3 = await fetchData(data2.origin.url);
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
    } catch (error) {
        console.error("Gio Error: ", error)
    }
}

asyncFunction()
