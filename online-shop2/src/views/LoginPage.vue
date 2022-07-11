<template>
  <div class="login">
    <FormComp :registration-page="false"></FormComp>
  </div>
</template>

<script>
// @ is an alias to /src
import FormComp from "../components/FormComp.vue";
export default {
  name: 'LoginPage',
  components: {
    FormComp
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