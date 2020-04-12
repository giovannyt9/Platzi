function sum(n1, n2) {
    return n1 + n2;
}

function calc(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calc(2, 5, sum));

function printDate1(callback) {
    console.log(new Date);
    setTimeout(function() {
        let datePrint = new Date
        callback(datePrint)
    },5000)
}

function printDate2(datePrint) {
    console.log(datePrint)
}

printDate1(printDate2)