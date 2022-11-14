import { calculateWinner, GameSymbol, GameWinner } from "./game_logic";

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

