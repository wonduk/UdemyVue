import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter > 100) {
        return 100;
      }
      if (finalCounter <= 0) {
        return 0;
      }
      console.log('finalCounter', finalCounter);
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    //컴포넌트 변형 중간에 작동하기 때문에 이름을 같게 해주면 좋음

    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter > 100) {
        return 100;
      }
      if (finalCounter <= 0) {
        return 0;
      }
      console.log('finalCounter', finalCounter);
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
