"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runGame = exports.GameVariant = void 0;
var GameVariant;
(function (GameVariant) {
    GameVariant[GameVariant["SSP"] = 0] = "SSP";
    GameVariant[GameVariant["SSPB"] = 1] = "SSPB";
})(GameVariant = exports.GameVariant || (exports.GameVariant = {}));
;
var currentGameVariant = GameVariant.SSP;
var numberOfSymbols = 3;
var GameSymbol;
(function (GameSymbol) {
    GameSymbol[GameSymbol["Stein"] = 0] = "Stein";
    GameSymbol[GameSymbol["Papier"] = 1] = "Papier";
    GameSymbol[GameSymbol["Schere"] = 2] = "Schere";
    GameSymbol[GameSymbol["Brunnen"] = 3] = "Brunnen";
})(GameSymbol || (GameSymbol = {}));
;
const leftWins = ["02", "10", "13", "21", "30", "32"];
let displayGameState;
let displayComputerSymbol;
let btnBrunnen;
addEventListener('DOMContentLoaded', () => {
    displayGameState = document.getElementById("displayGameState");
    displayComputerSymbol = document.getElementById("displayComputerSymbol");
    btnBrunnen = document.getElementById("btnBrunnen");
});
function runGame(symbol, computerSymbol = null) {
    if (displayComputerSymbol != undefined || displayGameState != undefined || btnBrunnen != undefined) {
        if (computerSymbol === null) {
            computerSymbol = getRandomInt(0, numberOfSymbols);
        }
        if (computerSymbol === Number(symbol)) {
            displayGameState.innerText = "unentschieden";
        }
        else {
            var playerWins = leftWins.includes(String(symbol) + String(computerSymbol));
            if (playerWins) {
                displayGameState.innerText = "Du hast gewonnen!";
            }
            else {
                displayGameState.innerText = "Der Computer gewinnt.";
            }
        }
        displayComputerSymbol.innerText = "Computer wählt: " + String(GameSymbol[computerSymbol]);
    }
}
exports.runGame = runGame;
function arrayIncludes(arr, value) {
    arr.forEach(val => {
        if (val === value) {
            return true;
        }
    });
    return false;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function toggleGameVariant(variant) {
    switch (variant) {
        case GameVariant.SSP:
            currentGameVariant = GameVariant.SSP;
            btnBrunnen.style.display = "none";
            numberOfSymbols = 3;
            break;
        case GameVariant.SSPB:
            currentGameVariant = GameVariant.SSPB;
            btnBrunnen.style.display = "block";
            numberOfSymbols = 4;
            break;
    }
}
