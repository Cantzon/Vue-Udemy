const app = Vue.createApp({
  data() {
    return {
      myName: "Hari Krishna",
      myAge: 22,
      googlePic:
        "https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png",
      favNumber: this.favNum(),
    };
  },
  methods: {
    favNum() {
      const rando = Math.random();
      return rando;
    },
  },
});

app.mount("#assignment");
