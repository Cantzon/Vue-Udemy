const app = Vue.createApp({
    data() {
        return {
            currGoal: '',
            goals: [],
            haveGoals: false,
        };
    },
    watch: {
        goals: {
            deep: true,
            handler(arr) {
                this.haveGoals = (arr.length > 0);
            }
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.currGoal);
            this.currGoal = '';
        }
    }
});

app.mount('#user-goals');
