const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "jojn",
                    name: "John",
                    age: 30,
                    phone: "0122222222",
                    email: "ttt@gmail.com",
                },
                {
                    id: "jane",
                    name: "Jane",
                    age: 28,
                    phone: "01011112222",
                    email: "aa@gmail.com",
                },
                {
                    id: "mike",
                    name: "Mike",
                    age: 35,
                    phone: "01022223333",
                    email: "eee@gmail.com",
                },
            ],
        };
    },
    methods: {},
});

app.component("friend-contact", {
    //뷰와 메인앱에서 해당 템플릿을 정의 할 수 있음
    template: `
        <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails(friend.id)">Show D etails</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: null,
            friend: {
                id: "jojn",
                name: "John",
                age: 30,
                phone: "0122222222",
                email: "ttt@gmail.com",
            },
        };
    },
    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
