<template>
  <v-app>
    <div class="navbar">
      <div class="login">
        <router-link to="/login" class="logintwo" >Login</router-link>
      </div>
      <div class="registration">
        <router-link to="/registration" class="registrationtwo" style="text-decoration: none; color:black; color:whitesmoke; font-size: 1vw;">Registration</router-link> 
      </div>
      <div class="home">
        <router-link to="/" class="hometwo" style="text-decoration: none; color:whitesmoke; font-size: 1vw;">Home</router-link> 
      </div>
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

<style scoped>
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

  .login,
  .registration,
  .home {
    width: 7%;
    border: 2%;
    border-radius: 30%;
    background-color: #777672;
    margin-right:2%;
  }

  .logintwo,
  .hometwo {
    margin-left: 30%;
    text-decoration: none; 
    color:black; 
    color:whitesmoke; 
    font-size: 1vw;
  }

  .registrationtwo {
    margin-left: 12%;
    text-decoration: none; 
    color:black; 
    color:whitesmoke; 
    font-size: 1vw;
  }
</style>