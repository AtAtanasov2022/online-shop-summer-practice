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
          border-radius: 40px;
        "
      />

      <router-link class="login" to="/login" v-if="!user">Login</router-link>
      <router-link class="login" to="/registration" v-if="!user"
        >Registration</router-link
      >
      <router-link
        v-if="user"
        class="login"
        to="/"
        @click.native="logout"
        style="text-decoration: none; color: whitesmoke; font-size: 1vw"
      >
        Logout</router-link
      >
      <router-link
        class="login"
        to="/"
        style="text-decoration: none; color: whitesmoke; font-size: 1vw"
        >Home
      </router-link>
      <router-link
        v-if="user"
        class="login"
        :to="`/user/${user.user.id}`"
        style="text-decoration: none; color: whitesmoke; font-size: 1vw"
      >
        My profile
      </router-link>
    </div>

    <v-main style="display: flex; justifyContent: center;">
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
  border-radius: 20px;
}

.login {
  height: 75%;
  width: 7%;
  border-radius: 50px;
  background-color: #778899;
  margin-right: 1%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1vw;
  justify-content: center;
}

/* .logintwo,
.hometwo {
  margin-left: 30%;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1vw;
  line-height: 200%;
}

.logouttwo {
  margin-left: 25%;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1vw;
  line-height: 200%;
}

.registrationtwo {
  margin-left: 12%;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1vw;
  line-height: 200%;
} */
</style>
