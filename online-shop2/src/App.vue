<template>
  <v-app>
    <div class="navbar">
      <img src="./assets/myShopLogoFinal.png" alt="MyShop" style="width: 3%; height: 80%; display: flex; justify-content: flex-start; margin-right: 67%; border-radius: 40%;">
      
      <div class="login">
        <router-link to="/login" class="logintwo">Login</router-link>
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
    height: 75%;
    width: 7%;
    border: 2%;
    border-radius: 60%;
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
    line-height: 250%;
  }

  .registrationtwo {
    margin-left: 12%;
    text-decoration: none; 
    color:black; 
    color:whitesmoke; 
    font-size: 1vw;
    line-height: 250%;
  }
</style>