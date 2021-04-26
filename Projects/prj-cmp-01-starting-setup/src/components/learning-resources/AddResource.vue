<template>
  <base-dialog v-if='!validUserInput' title='Invalid Input' @close='validUserInput=true'>
    <template #default>
      <p> One or more of the fields you have entered are invalid. </p>
      <p>Please correct them and try again.</p>
    </template>
    <template #actions>
      <base-button @click='validUserInput = true'> Gotcha</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent='addRes'>
      <div class='form-control'>
        <label for='title'> Title: </label>
        <input type='text' id='title' name='title' ref='enteredTitle' />
      </div>
      <div class='form-control'>
        <label for='description'> Description: </label>
        <textarea id='description' name='description' rows='3' ref='enteredDescription' />
      </div>
      <div class='form-control'>
        <label for='link'> Link: </label>
        <input type='url' name='link' id='link' ref='enteredLink' />
      </div>
      <div class='form-control'>
        <base-button type='submit'>
          Add Resource
        </base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  name: 'AddResource',
  inject: ['addNewResource'],
  data() {
    return {
      validUserInput: true
    };
  },
  methods: {
    addRes() {
      console.log('reached');
      const tit = this.$refs.enteredTitle.value;
      const des = this.$refs.enteredDescription.value;
      const lin = this.$refs.enteredLink.value;

      if (tit.trim() === '' || des.trim() === '' || lin.trim() === '') {
        this.validUserInput = false;
        return;
      }

      this.addNewResource(tit, des, lin);
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>