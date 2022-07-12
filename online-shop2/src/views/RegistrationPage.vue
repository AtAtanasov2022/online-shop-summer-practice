<template>
  <div class="registration" v-if="showComp">
    <FormComp></FormComp>
  </div>
</template>

<script>
// @ is an alias to /src
//import ButtonsComp from "../components/ButtonsComp.vue";
import FormComp from "../components/FormComp.vue";
import store from "@/store";

export default {
  name: "RegistrationPage",

  components: {
    //ButtonsComp,
    FormComp,
  },

  data() {
    return {
      text: "Hello There!",
      showComp: !store.getters.getUserLoggedIn,
    };
  },
};
</script>

<style scoped>
.registration {
  width: 100%;
  height: 100%;
  border-radius: 0%;
  background-color: white;
}
</style>