const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: "손원덕",
            confirmedName: "",
        };
    },
    methods: {
        showAlert() {
            alert("Hello, " + this.name);
        },
        keyHandle() {
            this.confirmedName = this.name;
        }
    },
});

app.mount("#events");
