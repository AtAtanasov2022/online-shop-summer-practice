<template>
  <FormComponent :registration-page="false" v-if="user"></FormComponent>
</template>

<script>
// @ is an alias to /src
import FormComponent from "../components/FormComponent.vue";
import store from '@/store'

export default {
  name: 'LoginPage',
  components: {
    FormComponent
  },

  data() {
    return {
      user: !store.getters.getUserInfo,
    };
  },
  methods: {
    // redirect() {
    //   this.$router.push('/')
    // }
  }
}
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    border-radius: 0%;
    background-color: white;
  }
</style>