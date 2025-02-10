<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<script>
export default {

}
</script>

<style scoped>
    dialog{
        position:fixed;
        top: 20vh;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

    }
</style>