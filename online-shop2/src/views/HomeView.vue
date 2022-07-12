<template>
  <div class="main">
    <h2>Welcome to MyFacebook</h2>
    <div class="feed" v-if="userLoggedIn">
      <p>Here will be the list</p>
    </div>
    <div v-else>
      <p>Please log in</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'HomeView',

    computed: {
      ...mapGetters({
        userLoggedIn: 'getUserLoggedIn'
      }),
    }
  }
</script>

<style>
  .main {
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .feed {
    background-color: #dcdcdc;
    width: 60%;
    height: 70%;
    margin-left: 20%;
    margin-top: 5%;
    border-radius: 10%;
  }
</style>
