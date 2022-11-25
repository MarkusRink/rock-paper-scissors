import { describe, expect, test } from "vitest"
import { mount } from '@vue/test-utils'
import Game from "./Game.vue"
import { GameSymbol, GameVariant, GameWinner } from "./GameElements"

describe("test Game component", () => {
    test("check every combination for SSP", async () => {
        const wrapper = mount(Game)

        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)

        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)

        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
    })

    test("check every combination for SSPB", async () => {
        const wrapper = mount(Game)

        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        wrapper.vm.runGame(GameSymbol.Stein, GameSymbol.Brunnen)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)

        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        wrapper.vm.runGame(GameSymbol.Schere, GameSymbol.Brunnen)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)

        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        wrapper.vm.runGame(GameSymbol.Papier, GameSymbol.Brunnen)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)

        wrapper.vm.runGame(GameSymbol.Brunnen, GameSymbol.Stein)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        wrapper.vm.runGame(GameSymbol.Brunnen, GameSymbol.Schere)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Player)
        wrapper.vm.runGame(GameSymbol.Brunnen, GameSymbol.Papier)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Computer)
        wrapper.vm.runGame(GameSymbol.Brunnen, GameSymbol.Brunnen)
        await new Promise(r => setTimeout(r))
        expect(wrapper.vm.winner).toBe(GameWinner.Nobody)
    })

    test("press all buttons", async () => {
        const wrapper = mount(Game)
        
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