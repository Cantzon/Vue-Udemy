const app = Vue.createApp({
    data() {
        return {};
    }
});

app.component('friend-contact', {
    template: `
        <li>
            <h2> {{ friend.name }}</h2>
            <button @click="toggleDetails"> {{dataIsVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="dataIsVisible">
                <li> <strong>Phone: </strong> {{friend.phone}}</li>
                <li> <strong>Email: </strong> {{friend.email}}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            dataIsVisible: false,
            friend: {
                name: 'Manuel Lorenz',
                phone: 170855,
                email: "h4I2yce9",
            },
        };
    },
    methods: {
        toggleDetails() {
            this.dataIsVisible = !this.dataIsVisible;
        }
    }
})

app.mount("#app")