<template>
  <ul>
    <li :class='{active: modelValue === "poor"}'>
      <button type='button' @click='activate("poor")'>Poor</button>
    </li>
    <li :class='{active: modelValue === "avg"}'>
      <button type='button' @click='activate("avg")'>Average</button>
    </li>
    <li :class='{active: modelValue === "great"}'>
      <button type='button' @click='activate("great")'>Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option){
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: aquamarine;
}

.active button {
  color: aquamarine;
}

ul {
  list-style: none;
  margin: 0 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  font: inherit;
  background-color: transparent;
}
</style>