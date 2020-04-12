const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Gio Do something async"), 3000)
            : reject(new Error("Gio Error"))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log("Gio Before");
doSomething();
console.log("Gio After")

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log("Gio Before AnotherFunction");
anotherFunction();
console.log("Gio After Another Function")
