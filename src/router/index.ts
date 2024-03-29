import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import EventList from '../views/EventList.vue';
import Todo from '../views/Todo.vue';
import Vuex from '../views/Vuex.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/typescript',
    name: 'TypeScript',
    component: () => import('@/views/TypeScript.vue')
  },
  {
    path: '/events',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: () => import('@/views/EventDetails.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
