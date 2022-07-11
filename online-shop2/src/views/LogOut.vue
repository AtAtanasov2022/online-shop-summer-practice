<template>
  <div class="logout" v-if="!showComp">
      <FormComp
      ></FormComp>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'LogOut',

  data() {
    return {
        showComp: !store.getters.getUserLoggedIn,
    }
  },

  
}
</script>

<style scoped>
  .logout {
    width: 100%;
    height: 100%;
    border-radius: 0%;
    background-color: white;
  }
</style>