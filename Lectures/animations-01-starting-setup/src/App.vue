<template>
<!--  <div class='container'>-->
<!--    <users-list></users-list>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <div class="block" :class="{ animate: animating }"></div>-->
<!--    <button @click="animateBlock">Animate</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition>-->
<!--      <p v-if="visiblePara">Visible</p>-->
<!--    </transition>-->
<!--    <button @click="paraVisible">Toggle Paragraph</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition name="users" mode="out-in">-->
<!--      <button @click="showUsers" v-if="!visibleUsers">Show Users</button>-->
<!--      <button @click="hideUsers" v-else>Hide Users</button>-->
<!--    </transition>-->
<!--  </div>-->
<!--  <base-modal @close="hideDialog" :open="dialogIsVisible">-->
<!--    <p>This is a test dialog!</p>-->
<!--    <button @click="hideDialog">Close it!</button>-->
<!--  </base-modal>-->
<!--  <div class="container">-->
<!--    <button @click="showDialog">Show Dialog</button>-->
<!--  </div>-->
  <router-view v-slot='slotProps'>
    <transition name='route' mode='out-in'>
      <component :is='slotProps.Component'></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from '@/components/UsersList';
export default {
  // components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      animating: false,
      visiblePara: false,
      visibleUsers: false
    };
  },
  methods: {
    showUsers() {
      this.visibleUsers = true;
    },
    hideUsers() {
      this.visibleUsers = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animating = true;
    },
    paraVisible() {
      this.visiblePara = !this.visiblePara;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-fade 1s forwards;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.users-enter-from,
.users-leave-to {
  opacity: 0;
}

.users-enter-to,
.users-leave-from {
  opacity: 1;
}

.users-enter-active {
  transition: opacity 0.3s ease-in;
}

.users-leave-active {
  transition: opacity 0.3s ease-in;
}

.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-enter-from,
.route-leave-to {
  transform: scale(0.1);
  opacity: 0;
}
.route-enter-to,
.route-leave-from{
  transform: scale(1);
  opacity: 1;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(-70px) scale(1.2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
