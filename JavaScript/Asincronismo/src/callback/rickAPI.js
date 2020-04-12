let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let urlAPICharacters = "https://rickandmortyapi.com/api/character/";

function fetchData(urlAPI, callback) {
    let xHttp = new XMLHttpRequest();
    xHttp.open("GET", urlAPI, true);
    xHttp.onreadystatechange = function (event) {
        if(xHttp.readyState === 4) {
            if(xHttp.status === 200) {
                callback(null, JSON.parse(xHttp.responseText))
            } else {
                const ErrorMessage = new Error("Gio Request Error " + urlAPI);
                return callback(ErrorMessage, null)
            }
        }
    }
    xHttp.send()
}

fetchData(urlAPICharacters, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(urlAPICharacters + data1.results[1].id, function(error2, data2) {
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3)
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})