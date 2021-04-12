const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: '',
        };
    },
    methods: {
        showAlert() {
            alert("Congrats, you can click buttons! Great job :)");
        },
        outputPara(event) {
            if (event.target.id === 'output1') {
                this.output1 = event.target.value;
            } else if (event.target.id === 'output2') {
                this.output2 = event.target.value;
            }
        }
    }
});

app.mount("#assignment");