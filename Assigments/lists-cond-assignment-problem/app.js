const app = Vue.createApp({
    data() {
        return {
            currTask: "",
            tasks: [],
            showList: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.currTask);
        }
    }
});

app.mount("#assignment");