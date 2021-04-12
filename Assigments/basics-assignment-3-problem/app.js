const app = Vue.createApp({
    data() {
        return {
            value: 0,
        }
    },
    watch: {
        changeResult() {
            const that = this;
            setTimeout(function () {
                console.log("not there timer ping")
                that.value = 0;
            }, 5000);
        },
    },
    computed: {
        changeResult() {
            if(this.value < 37){
                console.log("not there ping")
                return 'Not there yet';
            } else if (this.value > 37) {
                return 'Too much!';
            }
        },
    },
    methods: {
        addOne() {
            this.value += 1;
        },
        addFive() {
            this.value += 5;
        }

    }
});

app.mount("#assignment")