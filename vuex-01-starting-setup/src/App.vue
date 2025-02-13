<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter></TheCounter>
    <button @click='addCounter'>Add 1</button>
    <ChangeCounter></ChangeCounter>
    <FavoriteValue></FavoriteValue>
    </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    isAuth() {
      console.log("isAuth",this.$store.isLoggedIn);
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    addCounter() {
      // this.$store.commit('increment', { value: 4 });
      this.$store.dispatch('increment', {
        type: 'increace',
        value: 60
      });
    }
  },
};
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