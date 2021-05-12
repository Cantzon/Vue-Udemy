<template>
<section>
  <h2> Find Your Coach! </h2>
  <span>
    <input type='checkbox' checked id='frontend' @change='changeFilter'/>
    <label for='frontend'>Frontend</label>
  </span>
  <span>
    <input type='checkbox' checked id='backend' @change='changeFilter'/>
    <label for='backend'>Backend</label>
  </span>
  <span>
    <input type='checkbox' checked id='career' @change='changeFilter'/>
    <label for='career'>Career</label>
  </span>
</section>
</template>

<script>
export default {
  emits: ['change-filter'],
  name: 'CoachFilter',
  data(){
    return{
      filters: {
        backend: true,
        frontend: true,
        career: true,
      }
    }
  },
  methods: {
    changeFilter(event){
      const filterName = event.target.id;
      const filterValue = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [filterName]: filterValue,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
