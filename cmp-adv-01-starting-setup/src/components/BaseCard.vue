<template>
    <div>
        <header>
            <!-- <h1>{{ content }}</h1> -->
            <p>This is a Vue.js component.</p>
            <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </header>
        <!-- <div v-if="show"> -->
        <!-- <p>{{ content }}</p> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    props: ['content',],
}
</script>
<style scoped>
div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>