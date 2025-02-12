<template>
    <ul>
        <li :class="{active: modelValue === 'poor'}" ><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: modelValue === 'great'}" ><button type="button" @click="activate('great')">Great</button></li>
        <li :class="{active: modelValue === 'good'}" ><button type="button" @click="activate('good')">good</button></li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // data() {
    //     return {
    //         activeOption: this.modelValue
    //     }
    // },
    computed: {
        activateOption(){
            return this.modelValue;
        }
    },
    methods: {
        activate(option) {
            console.log("this.modelValue",this.modelValue);
            this.activeOption = option;
            this.$emit('update:modelValue', option)
        }
    }
}
</script>

<style scoped>
.active {
    border-color: #a00078;
}
.active button {
    color: #a00078;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;

}

li {
    margin-right: 10px;
    flex-basis: 25%;
    display: flex;
    border: 1px solid #f1f1f1;
    padding: 10px;
    justify-content: center;

}

button {
    padding: 10px;
    background-color: #f1f1f1;
    border: none;
    cursor: pointer;
}
</style>