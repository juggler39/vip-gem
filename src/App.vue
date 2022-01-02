<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { gsap } from 'gsap';

export default class App extends Vue {
  preloaderAnimation = gsap.to('#preloader', {
    opacity: 0,
    duration: 3,
    onComplete: this.removePreloader
  });
  public removePreloader(): void {
    document.getElementById('preloader')?.remove();
  }
  mounted(): void {
    this.preloaderAnimation;
  }
  onBeforeUnmount(): void {
    console.log('destroing');
    this.preloaderAnimation.kill();
  }
}
</script>
