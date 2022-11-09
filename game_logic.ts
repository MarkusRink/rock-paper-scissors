const gameVariants = ["SSP", "SSPB"];
var currentGameVariant = gameVariants[0];
type Symbols = "stone" | "paper" | "scissors" | "well";
const symbolMap = { stone: 0, paper: 1, scissors: 2, well: 3 };
const leftWins = ["02", "10", "13", "21", "30", "32"]; // TODO add explaination/documentation

// HTML elements
var displayGameState = document.getElementById("displayGameState");
var displayComputerSymbol = document.getElementById("displayComputerSymbol");
const btnWell = document.getElementById("btnWell"); // maybe rename

function runGame(symbol: Symbols): void {
  if (displayComputerSymbol !== null || displayGameState !== null) {
    var computerSymbol = getRandomInt(0, 3); // TODO add gamevariant with 4 symbols
    // TODO check TSC error on includes, possible solution with polyfill
    /**
     * 
     var playerWins = leftWins.includes(
        String(symbolMap[symbol]) + String(computerSymbol)
        );
    */
   var playerWins = true;

    // TODO Set computer Symbol
    displayComputerSymbol.innerText = "Computer wählt: " + computerSymbol;
    if (playerWins) {
      // Du hast gewonnen!
      displayGameState.innerText = "Du hast gewonnen!";
    } else {
      // Der Computer gewinnt.
      displayGameState.innerText = "Der Computer gewinnt.";
    }
  }
}

/**
 * Implementation from mdn doccs.
 * @param min inclusive minimum value
 * @param max exclusive maximum value
 * @returns a random integer.
 */
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// TODO add Game Variant EventListener
