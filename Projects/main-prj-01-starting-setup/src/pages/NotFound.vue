<template>
  <section>
    <base-card>
      <h2> Page Not Found </h2>
      <p> The page you were looking for was not found. Try visiting our <router-link to='/coaches'> coaches</router-link> page. </p>
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped></style>
