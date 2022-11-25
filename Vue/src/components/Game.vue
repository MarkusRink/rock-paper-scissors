<script lang="ts">
import { defineComponent } from 'vue'
import { GameSymbol, GameVariant, GameWinner } from './GameElements'


/** Hardcode every combination, where the left symbol wins. */
const leftWins = [
    String(GameSymbol.Stein) + String(GameSymbol.Schere),
    String(GameSymbol.Papier) + String(GameSymbol.Stein),
    String(GameSymbol.Papier) + String(GameSymbol.Brunnen),
    String(GameSymbol.Schere) + String(GameSymbol.Papier),
    String(GameSymbol.Brunnen) + String(GameSymbol.Stein),
    String(GameSymbol.Brunnen) + String(GameSymbol.Schere),
]

export default defineComponent({
    data() {
        return {
            GameSymbol: GameSymbol,
            GameVariant: GameVariant,
            GameWinner: GameWinner,
            gameVariant: GameVariant.SSP,
            playerSymbol: null as GameSymbol | null,
            computerSymbol: null as GameSymbol | null,
            displayText: "",
            displayClass: ""
        }
    },
    computed: {
        winner() {
            if (this.computerSymbol != null && this.playerSymbol != null
            ) {
                if (this.playerSymbol === this.computerSymbol) {
                    return GameWinner.Nobody
                }
                else if (leftWins.includes(String(this.playerSymbol) + String(this.computerSymbol))) {
                    return GameWinner.Player
                }
                else {
                    return GameWinner.Computer
                }
            } else {
                return null
            }
        }
    },
    watch: {
        winner(newWinner) {
            if (this.playerSymbol != null && this.computerSymbol != null && this.winner != null) {
                switch (this.winner) {
                    case GameWinner.Computer:
                        this.displayText = String(GameSymbol[this.playerSymbol]) + " verliert gegen " + String(GameSymbol[this.computerSymbol])
                        this.displayClass = "display-lose"
                        break
                    case GameWinner.Player:
                        this.displayText = String(GameSymbol[this.playerSymbol]) + " gewinnt gegen " + String(GameSymbol[this.computerSymbol])
                        this.displayClass = "display-win"
                        break
                    case GameWinner.Nobody:
                        this.displayText = "unentschieden mit " + String(GameSymbol[this.playerSymbol])
                        this.displayClass = "display-stalemate"
                        break
                }
            }
        }
    },
    methods: {
        /**
         * Implementation from mdn docs.
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
         * @param min inclusive minimum value
         * @param max exclusive maximum value
         * @returns a random integer.
         */
        getRandomInt(min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        },

        runGame(playerSymbol: GameSymbol, computerSymbol: GameSymbol | null = null) {
            this.playerSymbol = playerSymbol
            if (computerSymbol === null) {
                computerSymbol = this.getRandomInt(0, this.gameVariant)
            }
            this.computerSymbol = computerSymbol
        },
    }
})
</script>


<template>
    <div class="gameArea">
        <p>
            <i>Kannst du den Computer in Stein, Schere, Papier schlagen? <br /> Starte eine
                neue Runde, indem du auf eines der Symbole klickst.</i>
        </p>
        <div class="display" :class="[displayClass]" data-test="text">
            {{ displayText }}
        </div>

        <div class="button-box">
            <button id="btn-schere" @click="runGame(GameSymbol.Schere)">✂️ Schere</button>
            <button id="btn-stein" @click="runGame(GameSymbol.Stein)">🪨 Stein</button>
            <button id="btn-papier" @click="runGame(GameSymbol.Papier)">📄 Papier</button>
            <button id="btn-brunnen" v-if="gameVariant === GameVariant.SSPB" @click="runGame(GameSymbol.Brunnen)">⛲
                Brunnen</button>
        </div>

        <span class="divider"></span>
        <form>
            <label><i>Hier kannst du die Spielvariante wechseln:</i></label><br />
            <input type="radio" id="gameVariant1" name="gameVariant" checked @change="gameVariant = GameVariant.SSP" />
            <label for="gameVariant1">Stein, Schere, Papier</label><br />
            <input type="radio" id="gameVariant2" name="gameVariant" @change="gameVariant = GameVariant.SSPB" />
            <label for="gameVariant2">Stein, Schere, Papier, Brunnen</label>
        </form>
    </div>
</template>

<style lang="sass">

    .gameArea
        margin: auto
        display: flex
        flex-direction: column
        justify-content: center
        align-self: center
        max-width: 600px

        .button-box
            display: flex
            flex-wrap: nowrap
            justify-content: space-between
            
        button
            font-size: large
            padding: 1rem
            margin: 5px
            width: 100%
            
        
            &:first-child
                margin-left: 0
            
            &:last-child
                margin-right: 0

    .display
        max-height: 0px
        transition: max-height 0.5s cubic-bezier(.19,1,.22,1), background 0.5s cubic-bezier(.19,1,.22,1)
        text-align: center
        font-family: monospace
        font-size: x-large
        border-radius: 5px
        overflow: hidden
    
    .display-lose, .display-stalemate, .display-win
        padding: 1rem
        margin: 5px 0
        max-height: 2rem

    .display-lose
        background: #E64C4C // red

    .display-stalemate
        background: #C1CDE6 // light blue

    .display-win
        background: #4CE663 // green

    .divider
        width: 100%
        margin: 1rem 0
        border: 1px solid lightgray

</style>