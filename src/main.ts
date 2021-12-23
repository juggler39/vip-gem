import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import BaseModal from '@/components/training/BaseModal.vue';

const app = createApp(App);
app.use(router).use(store);
app.component('base-modal', BaseModal);
app.mount('#app');
