enum GameVariant {
  SSP,
  SSPB,
};
enum GameSymbol {
  Stein,
  Papier,
  Schere,
  Brunnen
};

/** Track the number of symbols in the current game variant. */
var numberOfSymbols = 3;

/** Hardcode every combination, where the left symbol wins. */
const leftWins = [
  String(GameSymbol.Stein) + String(GameSymbol.Schere),
  String(GameSymbol.Papier) + String(GameSymbol.Stein),
  String(GameSymbol.Papier) + String(GameSymbol.Brunnen),
  String(GameSymbol.Schere) + String(GameSymbol.Papier),
  String(GameSymbol.Brunnen) + String(GameSymbol.Stein),
  String(GameSymbol.Brunnen) + String(GameSymbol.Schere),
]

// -- HTML elements --
let displayGameState: HTMLElement;
let btnBrunnen: HTMLElement;
addEventListener('DOMContentLoaded', () => {
  displayGameState = document.getElementById("displayGameState");
  btnBrunnen = document.getElementById("btnBrunnen"); // maybe rename
});

/**
 * Entry point for the game.
 * @param symbol Symbol of the player
 * @param computerSymbol Symbol of the computer, random by default
 */
function runGame(playerSymbol: GameSymbol, computerSymbol: GameSymbol = null): void {
  if (displayGameState != undefined || btnBrunnen != undefined) {
    if (computerSymbol === null) {
      computerSymbol = getRandomInt(0, numberOfSymbols);
    }
    displayGameOutcome(calculateWinner(playerSymbol, computerSymbol), playerSymbol, computerSymbol);
  }
}

enum GameWinner {
  Player,
  Computer,
  Nobody
}

function displayGameOutcome(winner: GameWinner, playerSymbol: GameSymbol, computerSymbol: GameSymbol): void {
  switch (winner) {
    case GameWinner.Nobody:
      displayGameState.innerText =
        " unentschieden mit "
        + String(GameSymbol[computerSymbol]);
      displayGameState.style.backgroundColor = '#C1CDE6'; // light blue
      break
    case GameWinner.Player:
      displayGameState.innerText =
        String(GameSymbol[playerSymbol])
        + " gewinnt gegen "
        + String(GameSymbol[computerSymbol]);
      displayGameState.style.backgroundColor = '#4CE663'; // green
      break
    case GameWinner.Computer:
      displayGameState.innerText =
        String(GameSymbol[playerSymbol])
        + " verliert gegen "
        + String(GameSymbol[computerSymbol]);
      displayGameState.style.backgroundColor = '#E64C4C'; // red
      break
  }
}

function calculateWinner(playerSymbol: GameSymbol, computerSymbol: GameSymbol): GameWinner {
  if (playerSymbol === computerSymbol) {
    return GameWinner.Nobody
  }
  else if (leftWins.includes(String(playerSymbol) + String(computerSymbol))) {
    return GameWinner.Player
  }
  else {
    return GameWinner.Computer
  }
}

/**
 * Implementation from mdn docs.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param min inclusive minimum value
 * @param max exclusive maximum value
 * @returns a random integer.
 */
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/** Update UI and internal State */
function setGameVariant(variant: GameVariant): void {
  switch (variant) {
    case GameVariant.SSP:
      btnBrunnen.style.display = "none";
      numberOfSymbols = 3;
      break
    case GameVariant.SSPB:
      btnBrunnen.style.display = "block";
      numberOfSymbols = 4
      break
  }
}

//? Is it possible to export functions, e.g. calculateWinner(), only for testing and not production?
export { GameVariant, GameSymbol, GameWinner };
export { calculateWinner, runGame, setGameVariant };