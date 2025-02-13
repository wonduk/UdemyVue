<template>
    <div>
        <button type="button" @click="increase({value: 10})">Add 2</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['increment', 'increase']),
    },
    mounted() {
    },
    created() {
    },
}
</script>

<style></style>
