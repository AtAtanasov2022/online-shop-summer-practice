<template>
  <div class="login" v-if="showComp">
    <FormComp :registration-page="false"></FormComp>
    <!--<button @click="redirect">click</button>-->
  </div>
</template>

<script>
// @ is an alias to /src
import FormComp from "../components/FormComp.vue";
import store from '@/store'

export default {
  name: 'LoginPage',
  components: {
    FormComp
  },

  data() {
    return {
      showComp: !store.getters.getUserLoggedIn,
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