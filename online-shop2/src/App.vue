<template>
  <v-app>
    <div class="navbar">
      <img
        alt="MyFacebookLogo"
        src="./assets/facebook-svgrepo-com.svg"
        style="
          width: 3%;
          height: 80%;
          display: flex;
          justify-content: flex-start;
          margin-right: 67%;
          border-radius: 40%;
        "
      />

      <div class="login" v-if="!user">
        <router-link to="/login" class="logintwo">Login</router-link>
      </div>
      <div class="registration" v-if="!user">
        <router-link
          to="/registration"
          class="registrationtwo"
          style="
            text-decoration: none;
            color: black;
            color: whitesmoke;
            font-size: 1vw;
          "
          >Registration</router-link
        >
      </div>
      <div class="logout" v-if="user">
        <router-link
          to="/"
          @click.native="logout"
          class="logouttwo"
          style="text-decoration: none; color: whitesmoke; font-size: 1vw"
        >
          Logout</router-link
        >
      </div>
      <div class="home">
        <router-link
          to="/"
          class="hometwo"
          style="text-decoration: none; color: whitesmoke; font-size: 1vw"
          >Home
        </router-link>
      </div>
    </div>

    <v-main style="">
      <router-view :key="$router.path" />
    </v-main>
  </v-app>
</template>

<script>
// import store from '@/store'

import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "App",

  data() {
    return {
      postFeed: false,
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },

  computed: {
    ...mapGetters({
      test: "getUserInfo",
    }),
    ...mapState({
      user: (state) => state.userInfo,
    }),
  },
};
</script>

<style scoped>
.navbar {
  height: 5%;
  width: 100%;
  background-color: #a9a9a9;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
}

.logo {
  width: 3%;
  height: 3%;
  justify-content: right;
}

.login,
.registration,
.home,
.logout {
  height: 75%;
  width: 7%;
  border: 2%;
  border-radius: 60%;
  background-color: #778899;
  margin-right: 1%;
  display: flex;
  align-items: center;
}

.logintwo,
.hometwo {
  margin-left: 30%;
  text-decoration: none;
  color: black;
  color: whitesmoke;
  font-size: 1vw;
  line-height: 200%;
}

.logouttwo {
  margin-left: 25%;
  text-decoration: none;
  color: black;
  color: whitesmoke;
  font-size: 1vw;
  line-height: 200%;
}

.registrationtwo {
  margin-left: 12%;
  text-decoration: none;
  color: black;
  color: whitesmoke;
  font-size: 1vw;
  line-height: 200%;
}
</style>