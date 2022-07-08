<template>
  <v-app>
    <div class="navbar">
      <router-link to="/login">Login</router-link> |
      <router-link to="/registration">Registration</router-link> |
      <router-link to="/">Home</router-link> 
    </div>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  .navbar{
    height: 5%;
    width: 100%;
    background-color: #4d4d4d;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
  }

  .logo{
    width: 3%;
    height: 3%;
    justify-content: right;
  }
</style>