import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from "./components/FriendContact";
import newFriend from "./components/newFriend";

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('new-friend', newFriend);
app.mount('#app');
