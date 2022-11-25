import { describe, expect, test } from "vitest"
import { mount } from '@vue/test-utils'
import Game from "./Game.vue"
import { GameSymbol, GameVariant, GameWinner } from "./GameElements"

describe("test logic", () => {
    test("check every combination for SSP", async () => {
        expect(Game).toBeTruthy()

        const wrapper = mount(Game, {
            props: {gameVariant: GameVariant.SSP}
        })

        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
    })

    test("check every combination for SSPB", async () => {
        expect(Game).toBeTruthy()
        const wrapper = mount(Game, {
            props: {gameVariant: GameVariant.SSP}
        })

        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Stein,
            computerSymbol: GameSymbol.Brunnen
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)

        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Schere,
            computerSymbol: GameSymbol.Brunnen
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        

        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Papier,
            computerSymbol: GameSymbol.Brunnen
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        
        await wrapper.setData({
            playerSymbol: GameSymbol.Brunnen,
            computerSymbol: GameSymbol.Stein
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Brunnen,
            computerSymbol: GameSymbol.Schere
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        await wrapper.setData({
            playerSymbol: GameSymbol.Brunnen,
            computerSymbol: GameSymbol.Papier
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        await wrapper.setData({
            playerSymbol: GameSymbol.Brunnen,
            computerSymbol: GameSymbol.Brunnen
        })
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
    })

    test("check random games", () => {
        expect(Game).toBeTruthy()

        const wrapper = mount(Game, {
            props: {gameVariant: GameVariant.SSPB}
        })
        wrapper.find('#btn-stein').trigger('click')
        wrapper.find('#btn-papier').trigger('click')
        wrapper.find('#btn-schere').trigger('click')
        //wrapper.find('#btn-brunnen').trigger('click')
        //TODO expect a change of playerSymbol and possible UI update
    })
})

//TODO test UI