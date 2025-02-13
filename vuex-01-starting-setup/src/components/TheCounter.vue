<template>
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['finalCounter']) //여러개 . . . 으로 설정가능
    }
}
</script>