import './styles.css';


enum GameVariant {
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
function runGame(symbol: GameSymbol, computerSymbol: GameSymbol = null): void {
  if (displayComputerSymbol != undefined || displayGameState != undefined || btnBrunnen != undefined) {
    if (computerSymbol === null){
      computerSymbol = getRandomInt(0, numberOfSymbols);
    }
    displayGameOutcome(calculateWinner(symbol, computerSymbol), symbol, computerSymbol);
  }
}

enum GameWinner {
  Player,
  Computer,
  Nobody
}

function displayGameOutcome(winner:GameWinner, symbol:GameSymbol, computerSymbol:GameSymbol):void {
  switch (winner){
    case GameWinner.Nobody:
      displayGameState.innerText = 
      " unentschieden mit "
      + String(GameSymbol[computerSymbol]);
      displayGameState.style.backgroundColor = '#C1CDE6'; // light blue
      break
    case GameWinner.Player:
      displayGameState.innerText = 
      String(GameSymbol[symbol]) 
      + " gewinnt gegen "
      + String(GameSymbol[computerSymbol]);   
      displayGameState.style.backgroundColor = '#4CE663'; // green
      break
    case GameWinner.Computer:
      displayGameState.innerText = 
      String(GameSymbol[symbol]) 
      + " verliert gegen "
      + String(GameSymbol[computerSymbol]);   
      displayGameState.style.backgroundColor = '#E64C4C'; // red
      break
  }
}

function calculateWinner(symbol: GameSymbol, computerSymbol: GameSymbol): GameWinner {
  if (symbol === computerSymbol){
    return GameWinner.Nobody
  }
  else if (leftWins.includes(String(symbol) + String(computerSymbol))){
    return GameWinner.Player
  }
  else {
    return GameWinner.Computer
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

export {GameVariant, GameSymbol, GameWinner};
export {calculateWinner};