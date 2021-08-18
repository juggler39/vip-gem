<template>
  <StartScreen />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import StartScreen from "./components/StartScreen.vue";

@Options({
  components: {
    StartScreen,
  },
})
export default class App extends Vue {

    
}
</script>

<style lang="scss">
@use "./assets/styles/main";
#app {
  height: 100vh;
  width: 100vw;
}
</style>
