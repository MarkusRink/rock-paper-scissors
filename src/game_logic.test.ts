import {calculateWinner, GameSymbol, GameWinner} from "./game_logic";

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

//TODO test SSPB
/** 
test("check every combination for SSPB"), () => {

}
*/
