<template>
<div>
    <button type="button" @click="login" v-if="!isAuth">Login</button>
    <button type="button" @click="logout" v-if="isAuth">Logout</button>
</div>
</template>

<script>
export default {
data() {
return {
} 
},
methods: {
    login() {
        this.$store.dispatch('login');
        console.log("isAuth",this.$store.getters);
        // Implement login logic here
    },
    logout() {
        this.$store.dispatch('logout');
        // Implement logout logic here
    }
},
mounted() {
},
created() {
},
computed: {
    isAuth() {
        return this.$store.getters.userIsAuthenticated;
    }
}
};</script>

<style>
</style>
