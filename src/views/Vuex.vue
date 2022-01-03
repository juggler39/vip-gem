<template>
  <base-container title="Vuex">
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script lang="ts">
import BaseContainer from '@/components/training/BaseContainer.vue';
import { defineComponent } from 'vue';
import { store } from '@/store';

export default defineComponent({
  components: {
    BaseContainer
  },
  methods: {
    addOne(): void {
      store.state.counter++;
    }
  }
});
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
