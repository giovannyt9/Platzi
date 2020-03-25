"use strict";

var OptSpecial = true;
const NumberCharacters = 37;
const Characters = {
    default: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    special: "&#$!"
};
const $hP455 = $("#hP455");

var BaseCharacters = Characters.default; 

if (OptSpecial){
    BaseCharacters += Characters.special
}

function aleatoryP455(BaseCharacters) {
    var P455 = "";
    for (let i = 0; i <= NumberCharacters - 1; i++) {
        P455 += BaseCharacters.charAt(Math.floor(BaseCharacters.length*Math.random()))
    }
    console.log(P455)
}

$hP455.val("HOla")

console.log($hP455.val())

aleatoryP455(BaseCharacters)