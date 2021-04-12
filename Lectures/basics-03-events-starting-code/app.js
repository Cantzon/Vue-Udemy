const app = Vue.createApp({
    data() {
        return {
            counter: 1,
            addNum: 1,
            subNum: 1,
        };
    },
    methods: {
        addUpdate(event) {
            if (!isNaN(event.target.valueAsNumber)) {
                this.addNum = event.target.valueAsNumber;
            } else {
                this.addNum = 1;
            }
        },
        addEvent() {
            this.counter += this.addNum;
        },
        subUpdate(event) {
            if (!isNaN(event.target.valueAsNumber)) {
                this.subNum = event.target.valueAsNumber;
            } else {
                this.subNum = 1;
            }
        },
        subEvent() {
            this.counter -= this.subNum;
        }
    }
});

app.mount('#events');
