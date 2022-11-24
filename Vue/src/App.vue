<script lang="ts">
import Game from './components/Game.vue';

export default {
  components: {
    Game
  }
}
</script>

<template>
  <h1>Wilkommen zu <b>Stein, Schere, Papier!</b></h1>
  <Game />
</template>

<style scoped lang="sass">
  h1
    text-align: center
</style>
