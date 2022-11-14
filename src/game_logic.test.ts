import { expect, test, describe } from '@jest/globals';
import { calculateWinner, GameSymbol, GameVariant, GameWinner, runGame, setGameVariant } from "./game_logic";

describe("Unit Tests", () => {
    test("check every combination for SSP", () => {
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Stein)).toBe(GameWinner.Nobody);
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Papier)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Schere)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Stein)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Papier)).toBe(GameWinner.Nobody);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Schere)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Stein)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Papier)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Schere)).toBe(GameWinner.Nobody);
    })

    test("check every combination for SSPB", () => {
        expect(calculateWinner(GameSymbol.Brunnen, GameSymbol.Brunnen)).toBe(GameWinner.Nobody);
        expect(calculateWinner(GameSymbol.Brunnen, GameSymbol.Stein)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Brunnen, GameSymbol.Schere)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Brunnen, GameSymbol.Papier)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Brunnen)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Brunnen)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Brunnen)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Stein)).toBe(GameWinner.Nobody);
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Papier)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Stein, GameSymbol.Schere)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Stein)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Papier)).toBe(GameWinner.Nobody);
        expect(calculateWinner(GameSymbol.Papier, GameSymbol.Schere)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Stein)).toBe(GameWinner.Computer);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Papier)).toBe(GameWinner.Player);
        expect(calculateWinner(GameSymbol.Schere, GameSymbol.Schere)).toBe(GameWinner.Nobody);
    })
})

test("check runGame with undefined variables", () => {
    // undefined HTML elements
    expect(() => runGame(GameSymbol.Schere)).toThrow()

    // partially defined HTML elements
    document.body.innerHTML =
        '<p id="displayGameState"></p>';
    document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: false
    }));
    expect(() => runGame(GameSymbol.Schere)).toThrow()
    document.body.innerHTML =
        '<p id="displayGameState"></p>';
    document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: false
    }));
})

describe("UI testing with valid DOM", () => {
    beforeAll(() => {
        document.body.innerHTML =
            '<p id="displayGameState"></p>' +
            '<div class="buttonBox">' +
            '<button id="btnBrunnen" style="display: none;"></button>' +
            '</div>';
        document.dispatchEvent(new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: false
        }));
    })

    test("check runGame with valid variables", () => {
        const displayGameState = document.getElementById("displayGameState")

        runGame(GameSymbol.Schere, GameSymbol.Schere)
        expect(displayGameState.innerText).toMatch(/unentschieden/)

        runGame(GameSymbol.Brunnen, GameSymbol.Schere)
        expect(displayGameState.innerText).toMatch(/gewinnt/)

        runGame(GameSymbol.Stein, GameSymbol.Papier)
        expect(displayGameState.innerText).toMatch(/verliert/)

        displayGameState.innerText = ""
        runGame(GameSymbol.Schere)
        expect(displayGameState.innerText).toBeTruthy()
    })

    test("check setGameVariant", () => {
        const btnBrunnen = document.getElementById("btnBrunnen")

        setGameVariant(GameVariant.SSP)
        expect(btnBrunnen.style.display).toMatch("none")

        setGameVariant(GameVariant.SSPB)
        expect(btnBrunnen.style.display).not.toMatch("none")
    })

    //? Using Typescript for this case, should it also be explicitly testet?
    /** Code doesn't expect undefined, so test fails.
    test("check runGame with undefined input", () => {
        expect(() => runGame(undefined)).toThrow()
        expect(() => runGame(undefined, undefined)).toThrow()
    })
    */
})


