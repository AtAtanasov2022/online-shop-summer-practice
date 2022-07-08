<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/registration">Registration</router-link> |
      <router-link to="/">Home</router-link> |
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgb(18, 115, 218);
  border: 1px;
  border-radius: 40%;
  width: 60%;
  margin-left: 17%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
