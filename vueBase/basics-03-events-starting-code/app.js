const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: "",
            confirmedName: "",
            lastName: "",
           // fullname: "",
        };
    },
    methods: {
        increment(num) {
            this.counter = this.counter + num;
        },
        decrement(num) {
            this.counter = this.counter - num;
        },
        reset() {
            this.counter = 0;
        },
        setName(lastName) {
            this.name = event.target.value; // 자바스크립트 문법. value 프로퍼티는 사용자가 불러온 값을 읽어올때 사용
        },
        submitForm() {
            //event.preventDefault(); //브라우저가 페이지를 전체 로드하지않도록 막는 것
            alert("저장");
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        resetInput() {
            this.name = "";
            this.confirmedName = "";
        },
        outputFullname() {
            if(this.name === "") {
                return "";
            } else {
                return "Hello, " + this.name;
            }
        },
    },
    //감시자 메서드 변경이 있을때마다 계속 실행됨.
    //일부 프로퍼티가 변경되어 데이터를 변경해야 할 경우 watch가 유용함.
    watch: {
        counter(value){
            if( value > 50){
                const that = this;
                setTimeout( function () {
                    that.counter = 0;
                }, 2000);
            }
        }
        // name(value) {
        //     if(value === "") {
        //         this.fuillname = "";
        //     } else {
        //     this.fuillname = value + ' ' + this.lastName;
        //     }
        // },
        // lastName() {
        //     if(value === "") {
        //         this.fuillname = "";
        //     } else {
        //     this.fuillname = this.name + ' ' + value;
        //     }
        // },
    },

    //Vue에서 지원하는 매서드. 객체를 값으로 전달해서 사용
    computed: {
        fullname() {
            if(this.name === "" || this.lastName === "") {
                return "";

            } else {
                return fullname = this.name + ' ' + this.lastName;
            }
        }
    },
});

app.mount("#events");
