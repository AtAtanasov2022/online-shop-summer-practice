<template>
  <FormComponent v-if="!user"></FormComponent>
</template>

<script>
// @ is an alias to /src
//import ButtonsComp from "../components/ButtonsComp.vue";
import FormComponent from "../components/FormComponent.vue";
import store from "@/store";

export default {
  name: "RegistrationPage",

  components: {
    //ButtonsComp,
    FormComponent,
  },

  data() {
    return {
      text: "Hello There!",
      user: store.getters.getUserInfo,
    };
  },
};
</script>

<style scoped>
/* .registration {
  width: 100%;
  height: 100%;
  border-radius: 0%;
  margin-top:5%;
  background-color: white;
} */
</style>