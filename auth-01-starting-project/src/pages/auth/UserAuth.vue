<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <p v-if="formIsValid">Please enter a valid email and password (must be at least 6 characters long)</p>
            <base-button>{{  submitButtonCation }}</base-button>
            <base-button type="button" mode="flat" @click="switchMode">{{  switchModeButtonCation }}</base-button>
        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: false,
            mode: 'login',
        }
    },
    methods: {
        sibmitForm() {
            this.formIsValid = true;
            if (this.email.length > 0 || !this.email.includes('@' || this.password.length > 6)) {
                this.formIsValid = false;
                return;
            }
        },
        switchMode() {
            this.mode = this.mode === 'login' ? 'signup' : 'login';
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode('signup');
            } else {
                this.mode('login');
            }
        }
    },
    computed: {
        submitButtonCation() {
            if (this.mode === 'login') {
                return "Login";
            } else{
                return "Signup";
            }
        },
        switchModeButtonCation() {
            if (this.mode === 'login') {
                return "Signup instead";
            } else {
                return "Login instead";
            }

        },
    }
};</script>

<style scoped>
form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>
