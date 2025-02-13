<template>
    <div>
        <button type="button" @click="addOne">Add 3</button>
        <p> 여기서 작업</p>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    } 
    },
    methods: {
        addOne() {
            return this.$store.getters.normalizedCounter;
        }
    },
    mounted() {
    },
    created() {
    }
    };</script>
    
    <style>
    </style>
    