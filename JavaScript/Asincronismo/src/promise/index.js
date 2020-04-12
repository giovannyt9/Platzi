const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Gio promise resolve");
        } else {
            reject("Gio promise reject")
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Gio promise 2 resolve")
            }, 3000)
        } else {
            const errorMessage = new Error("Gio we get an error")
            reject(errorMessage)
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err))


Promise.all([somethingWillHappen2(), somethingWillHappen()])
    .then(response => console.log("Array of results", response))
    .catch(err => console.log("Array of Errors", err))