const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            toggleClass: true,
            color: '',
        };
    },
    methods: {
        toggle() {
            this.toggleClass = !this.toggleClass;
        }
    }
});

app.mount("#assignment");