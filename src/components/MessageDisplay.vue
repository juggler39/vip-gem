<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getMessage } from '@/services/axios';
export default defineComponent({
  name: 'MessageDisplay',
  data() {
    return {
      message: {},
      error: null as null | string
    };
  },
  async created() {
    try {
      this.message = await getMessage();
    } catch (err) {
      this.error = 'Oops! Something went wrong.';
    }
  }
});
</script>
