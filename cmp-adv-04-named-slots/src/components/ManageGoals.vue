<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
        <teleport to="#app">
            <ErrorAlert v-if="inputIsInvalid">
                <h2>Input is invalid</h2>
                <p>단어를 넣어 주세요</p>
                <button @click="inputIsInvalid = false">Close</button>
            </ErrorAlert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue"

export default {
    components: {
        ErrorAlert,
    },
    data() {
        return {
            inputIsInvalid : false,
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue.trim()) {
                localStorage.setItem('goal', enteredValue);
                this.$refs.goal.value = '';
            }else if(enteredValue.trim() === '') {
                this.inputIsInvalid = true
            }
        }
    }
}
</script>

<style></style>