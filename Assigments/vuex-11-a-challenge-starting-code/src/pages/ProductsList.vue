<template>
  <section>
    <ul>
      <product-item
        v-for="prod in getProducts"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['getProducts'])
  },
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>