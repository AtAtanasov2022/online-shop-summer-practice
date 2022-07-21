<template>
  <div class="logout" @click="logout" v-if="!user">
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'LogOut',

  data() {
    return {
        user: !store.getters.getUserInfo,
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout")
    }
  }
  
}
</script>

<style scoped>
  .logout {
    width: 100%;
    height: 100%;
    border-radius: 0%;
    background-color: black;
  }
</style>