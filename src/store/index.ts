// store.ts
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

// define your typings for the store state
export interface State {
  counter: number;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    counter: 0
  },
  mutations: {
    increment(state, payload) {
      // mutate state
      state.counter += payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    }
  }
});
