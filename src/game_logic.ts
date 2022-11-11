
export enum GameVariant {
  SSP,
  SSPB,
};
var currentGameVariant = GameVariant.SSP;
var numberOfSymbols = 3;
enum GameSymbol {
  Stein,
  Papier,
  Schere,
  Brunnen
};

// Experimental idea to represent game variants as objects.
/**

 const SSP = {
   id: 0,
   symbols: [GameSymbol.Papier, GameSymbol.Stein, GameSymbol.Schere],
  }
  const SSPB = {
    id: 1,
    symbols: [GameSymbol.Papier, GameSymbol.Stein, GameSymbol.Schere, GameSymbol.Brunnen]
  }
*/

//type Symbols = "stein" | "papier" | "schere" | "brunnen";
//const symbolMap = { stein: 0, papier: 1, schere: 2, brunnen: 3 };
const leftWins = ["02", "10", "13", "21", "30", "32"]; // TODO add explaination/documentation

// HTML elements

let displayGameState:HTMLElement;
let displayComputerSymbol:HTMLElement;
let btnBrunnen:HTMLElement;
addEventListener('DOMContentLoaded', () => {
  displayGameState = document.getElementById("displayGameState");
  displayComputerSymbol = document.getElementById("displayComputerSymbol");
  btnBrunnen = document.getElementById("btnBrunnen"); // maybe rename
});

/**
 * 
 * @param symbol 
 * @param computerSymbol if not set a random GameSymbol, usefull for debugging
 */
export function runGame(symbol: GameSymbol, computerSymbol: GameSymbol = null): void {
  if (displayComputerSymbol != undefined || displayGameState != undefined || btnBrunnen != undefined) {
    if (computerSymbol === null){
      computerSymbol = getRandomInt(0, numberOfSymbols);
    }
    if (computerSymbol === Number(symbol)){
      // TODO unentschieden
      displayGameState.innerText = "unentschieden";
    } else {
      var playerWins = leftWins.includes(
        String(symbol) + String(computerSymbol)
        );
      if (playerWins) {
        // Du hast gewonnen!
        displayGameState.innerText = "Du hast gewonnen!";
      } else {
        // Der Computer gewinnt.
        displayGameState.innerText = "Der Computer gewinnt.";
      }
    }
    // TODO Set computer Symbol
    displayComputerSymbol.innerText = "Computer wählt: " + String(GameSymbol[computerSymbol]);    
  }
}

/**
 * @returns true if given value is equal (===) to a string in the array. 
 * Returns false in any other case.
 */
function arrayIncludes(arr:string[], value:string): Boolean{
  arr.forEach(val => {
    if (val === value){
      return true;
    }
  });
  return false;
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

/**
 * Update UI and internal State
 * @param variant 
 */
function toggleGameVariant(variant:GameVariant){
  switch (variant){
    case GameVariant.SSP:
      currentGameVariant = GameVariant.SSP;
      btnBrunnen.style.display = "none";
      numberOfSymbols = 3;
      break
    case GameVariant.SSPB:
      currentGameVariant = GameVariant.SSPB;
      btnBrunnen.style.display = "block";
      numberOfSymbols = 4
      break
  }
}