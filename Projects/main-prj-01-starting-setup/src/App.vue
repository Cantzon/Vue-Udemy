<template>
  <the-header></the-header>
  <router-view v-slot='slotProps'>
    <transition name='route' mode='out-in'>
      <component :is='slotProps.Component'></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
export default {
  name: 'App',
  components: { TheHeader }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.route-enter-to {
  opacity: 1;
  transform: scale(1);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
