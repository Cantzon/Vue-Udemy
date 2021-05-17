<template>
  <form @submit.prevent='register'>
    <div class="form-control" :class='{invalid: !firstName.isValid}'>
      <label for="firstName">First Name: </label>
      <input type="text" id="firstName" v-model.trim='firstName.val' @blur='resetValidity("firstName")'/>
    </div>

    <div class="form-control" :class='{invalid: !lastName.isValid}'>
      <label for="lastName">Last Name: </label>
      <input type="text" id="lastName" v-model.trim='lastName.val' @blur='resetValidity("lastName")'/>
    </div>

    <div class="form-control" :class='{invalid: !rate.isValid}'>
      <label for="rate">Hourly Rate ($):</label>
      <input type="number" id="rate"  v-model.number='rate.val' @blur='resetValidity("rate")'/>
    </div>

    <div class="form-control" :class='{invalid: !description.isValid}'>
      <label for="description">Description:</label>
      <textarea id="description" rows="5" v-model='description.val' @blur='resetValidity("description")'></textarea>
    </div>

    <div class="form-control" :class='{invalid: !areas.isValid}'>
      <h3>Areas of Expertise:</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model='areas.val' @blur='resetValidity("areas")'/>
        <label for="frontend"> Frontend Development </label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model='areas.val' @blur='resetValidity("areas")'/>
        <label for="backend"> Backend Development </label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model='areas.val' @blur='resetValidity("areas")'/>
        <label for="career"> Career Development </label>
      </div>
    </div>
    <p v-if='!formIsValid'> Please fill out all fields appropriately. </p>
    <base-button> Register </base-button>
  </form>
</template>

<script>

export default {
  name: 'CoachForm',
  emits:['register-coach'],
  data(){
    return{
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true,
    }
  },
  methods: {
    resetValidity(input){
      this[input].isValid = true;
    },
    validateForm(){
      this.formIsValid = true;
      if(this.firstName.val === ''){
        this.formIsValid = false;
        this.firstName.isValid = false;
      }
      if(this.lastName.val === ''){
        this.formIsValid = false;
        this.lastName.isValid = false;
      }
      if(!this.rate.val || this.rate.val<0 ){
        this.formIsValid = false;
        this.rate.isValid = false;
      }
      if(this.description.val === ''){
        this.formIsValid = false;
        this.description.isValid = false;
      }
      if(this.areas.val.length === 0){
        this.formIsValid = false;
        this.areas.isValid = false;
      }
    },
    register(){

      this.validateForm();
      if (!this.formIsValid) return;

      const submitData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,

      }
      this.$emit('register-coach', submitData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>