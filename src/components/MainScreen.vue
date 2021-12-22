<template>
  <section class="main-screen">
    <MainMenu />
    <TrainingMain />
    <MainGame />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainGame from '@/components/MainGame.vue';
import MainMenu from '@/components/MainMenu.vue';
import TrainingMain from '@/components/training/TrainingMain.vue';

export default defineComponent({
  name: 'MainScreen',
  components: {
    MainGame,
    MainMenu,
    TrainingMain
  }
});
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
}

@media (max-aspect-ratio: 6/4) {
  .main-screen {
    flex-direction: column;
  }
}

@media (max-aspect-ratio: 6/4) and (min-aspect-ratio: 4/5) {
  .main-screen {
    width: 80vmin;
    margin: auto;
  }
}
</style>
