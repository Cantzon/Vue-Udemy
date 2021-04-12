Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const inputVal = inputEl.value;
//     const newGoal = document.createElement('li');
//     newGoal.textContent = inputVal;
//     listEl.appendChild(newGoal);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
