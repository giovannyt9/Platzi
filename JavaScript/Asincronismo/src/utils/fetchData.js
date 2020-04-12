let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlAPI) => {
    return new Promise((resolve, reject) => {
        const xHttp = new XMLHttpRequest();
        xHttp.open("GET", urlAPI, true);
        xHttp.onreadystatechange = (() => {
            if (xHttp.readyState === 4) {
                (xHttp.status === 200)
                    ? resolve(JSON.parse(xHttp.responseText))
                    : reject(new Error("Gio Error: ", urlAPI))
            }
        });
        xHttp.send();
    });
}

module.exports = fetchData