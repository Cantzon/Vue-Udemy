const app = Vue.createApp({
    data() {
        return {
            currTask: "",
            tasks: [],
            showList: true,
        }
    },
    computed: {
        showOrHide() {
            return (this.showList ? 'Hide' : 'Show');
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.currTask);
            this.currTask = '';
        },
        showHideList() {
            this.showList = !this.showList;
        }
    }
});

app.mount("#assignment");