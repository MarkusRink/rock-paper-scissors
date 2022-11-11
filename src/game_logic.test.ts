import { runGame } from "./game_logic"
// TODO import/export ENUM correctly

test("check every combination for SSP", () => {
    document.body.innerHTML = 
    '<button id="btnBrunnen"></button>' +
    '<p id="displayGameState"></p>' +
    '<p id="displayComputerSymbol"></p>';
    const displayGameState = document.getElementById("displayGameState");
    const displayComputerSymbol = document.getElementById("displayComputerSymbol");
    const btnBrunnen = document.getElementById("btnBrunnen"); 
    
    runGame(GameSymbol.Stein, GameSymbol.Stein);
    expect(displayGameState.innerText).toBe("unentschieden");
    runGame(GameSymbol.Stein, GameSymbol.Papier);
    expect(displayGameState.innerText).toBe("Der Computer gewinnt.");
    runGame(GameSymbol.Stein, GameSymbol.Schere);
    expect(displayGameState.innerText).toBe("Du hast gewonnen!");
    runGame(GameSymbol.Papier, GameSymbol.Stein);
    expect(displayGameState.innerText).toBe("Du hast gewonnen!");
    runGame(GameSymbol.Papier, GameSymbol.Papier);
    expect(displayGameState.innerText).toBe("unentschieden");
    runGame(GameSymbol.Papier, GameSymbol.Schere);
    expect(displayGameState.innerText).toBe("Der Computer gewinnt.");
    runGame(GameSymbol.Schere, GameSymbol.Stein);
    expect(displayGameState.innerText).toBe("Der Computer gewinnt.");
    runGame(GameSymbol.Schere, GameSymbol.Papier);
    expect(displayGameState.innerText).toBe("Du hast gewonnen!");
    runGame(GameSymbol.Schere, GameSymbol.Schere);
    expect(displayGameState.innerText).toBe("unentschieden");
})