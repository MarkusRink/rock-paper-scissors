var GameVariant;
(function (GameVariant) {
    GameVariant[GameVariant["SSP"] = 0] = "SSP";
    GameVariant[GameVariant["SSPB"] = 1] = "SSPB";
})(GameVariant || (GameVariant = {}));
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
            displayGameState.innerText =
                " unentschieden mit "
                    + String(GameSymbol[computerSymbol]);
            displayGameState.style.backgroundColor = '#C1CDE6';
        }
        else {
            var playerWins = leftWins.includes(String(symbol) + String(computerSymbol));
            if (playerWins) {
                displayGameState.innerText =
                    String(GameSymbol[symbol])
                        + " gewinnt gegen "
                        + String(GameSymbol[computerSymbol]);
                displayGameState.style.backgroundColor = '#4CE663';
            }
            else {
                displayGameState.innerText =
                    String(GameSymbol[symbol])
                        + " verliert gegen "
                        + String(GameSymbol[computerSymbol]);
                displayGameState.style.backgroundColor = '#E64C4C';
            }
        }
        displayComputerSymbol.innerText =
            String(GameSymbol[symbol])
                + " VS "
                + String(GameSymbol[computerSymbol]);
    }
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
