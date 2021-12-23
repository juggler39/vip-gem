<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  public removePreloader(): void {
    const elem = document.getElementById('preloader');
    elem?.remove();
  }
  mounted(): void {
    this.removePreloader();
  }
}
</script>