<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="..."></slot>
        </li>
        <button @click="test">테스트</button>
    </ul>
</template>

<script>
export default {
    emits: [test],
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue']
        }
    },
    methods: {
        test() {
            this.$emit('test', 'Hello from Parent Component');
        }
    }
}
</script>

<style></style>