<template>
  <baseContainer title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="add(2)">Add 2</button>
    <button @click="add(-1)">Subtract 1</button>
  </baseContainer>
</template>

<script lang="ts">
import BaseContainer from '@/components/training/BaseContainer.vue';
import { defineComponent } from 'vue';
import { store } from '@/store';

export default defineComponent({
  components: {
    BaseContainer
  },
  computed: {
    counter() {
      return store.state.counter;
    }
  },
  methods: {
    add(n: number): void {
      //store.commit('increment', { value: n });
      store.commit({ type: 'increment', value: n });
    }
  }
});
</script>
