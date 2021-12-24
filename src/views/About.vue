<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/typescript">Typescript</router-link> |
  <TrainingMain />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TrainingMain from '@/components/training/TrainingMain.vue';

export default defineComponent({
  name: 'About',
  components: {
    TrainingMain
  }
});
</script>
