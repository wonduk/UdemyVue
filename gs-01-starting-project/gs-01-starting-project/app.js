Vue.createApp({
    data() {
        return {
            goals: [],
            enterdValue: "",
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enterdValue);
            this.enterdValue = "";
        },
    },
}).mount("#app");

//javascript로 작성한거
// const buttonEl = document.createElement.querySelector('button');
// const inputEl = document.createElement.querySelector('input');
// const listEl = document.createElement.querySelector('ul');

// function addGoal() {
//     const enterdValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enterdValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
