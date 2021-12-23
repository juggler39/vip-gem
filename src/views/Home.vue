<template>
  <component @startGame="startGame" v-bind:is="currentView"></component>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StartScreen from '@/components/StartScreen.vue';
import MainScreen from '@/components/MainScreen.vue';

@Options({
  components: {
    StartScreen,
    MainScreen
  }
})
export default class Home extends Vue {
  currentView = 'StartScreen';
  startGame(): void {
    this.currentView = 'MainScreen';
  }
}
</script>

<style lang="scss">
@use '../assets/styles/main';
#app {
  height: 100vh;
  width: 100vw;
}
</style>
