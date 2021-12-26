<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { gsap } from 'gsap';

export default class App extends Vue {
  public removePreloader(): void {
    const elem = document.getElementById('preloader');
    elem?.remove();
  }
  mounted(): void {
    gsap.to('#preloader', {
      opacity: 0,
      duration: 3,
      onComplete: this.removePreloader
    });
  }
}
</script>
