const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "go to jess place",
            courseGoalB: "<strong> Don't</strong> go to Jess' place",
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const rando = Math.random();
            if (rando < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});


app.mount('#user-goal');