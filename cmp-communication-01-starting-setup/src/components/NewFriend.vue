<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="enteredEmail"/>
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input type="tel" v-model="enteredPhone"/>
        </div>
        <div>
            <button @click="submitForm">Add Contact</button>
        </div>

    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredEmail: '',
            enteredPhone: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-contact', {
                name: this.enteredName,
                email: this.enteredEmail,
                phone: this.enteredPhone
            });
            this.resetForm();
        },
        resetForm() {
            this.enteredName = '';
            this.enteredEmail = '';
            this.enteredPhone = '';
        }
    }
}
</script>

<style></style>