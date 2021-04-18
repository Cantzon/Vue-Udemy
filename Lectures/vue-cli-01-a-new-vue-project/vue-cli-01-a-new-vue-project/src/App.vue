<template>
<section>
  <h2> Friend List</h2>
  <ul>
    <li>

    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          name: 'Bruh Moment',
          phone: '123 456',
          email: 'bruh@moment'
        }, {
          name: 'Baba Booey',
          phone: '789 012',
          email: 'stop@dude.com'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>