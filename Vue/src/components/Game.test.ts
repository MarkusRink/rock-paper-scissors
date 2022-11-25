import { describe, expect, test } from "vitest"
import { mount } from '@vue/test-utils'
import Game from "./Game.vue"
import { GameSymbol, GameVariant, GameWinner } from "./GameElements"

describe("test Game component", () => {
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

    test("press all buttons", async () => {
        const wrapper = mount(Game, {
            props: {gameVariant: GameVariant.SSP}
        })
        
        await wrapper.get('#btn-stein').trigger('click')
        expect(wrapper.get('[data-test="text"]').text()).contain("Stein")        
        await wrapper.get('#btn-papier').trigger('click')
        expect(wrapper.get('[data-test="text"]').text()).contain("Papier")
        await wrapper.get('#btn-schere').trigger('click')
        expect(wrapper.get('[data-test="text"]').text()).contain("Schere")

        expect(wrapper.find('#btn-brunnen').exists()).toBe(false)
        await wrapper.get('#gameVariant2').trigger('change')
        expect(wrapper.find('#btn-brunnen').exists()).toBe(true)

        
        await wrapper.get('#btn-brunnen').trigger('click')
        expect(wrapper.get('[data-test="text"]').text()).contain("Brunnen")

        await wrapper.get('#gameVariant1').trigger('change')
        expect(wrapper.find('#btn-brunnen').exists()).toBe(false)
    })
})