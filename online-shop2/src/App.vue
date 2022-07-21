<template>
  <v-app style="background-color: white">
    <Loader v-if="!isLoaded"></Loader>
    <div class="navbar" v-if="isLoaded">
      <router-link to="/" style="
          width: 3%;
          height: 80%;
          display: flex;
          justify-content: flex-start;
          margin-right: 67%;
          border-radius: 100px;
        "><img
        alt="MyFacebookLogo"
        src="./assets/facebook-svgrepo-com.svg"
      /></router-link>

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

    <v-main
      v-if="isLoaded"
      style="display: flex; justifycontent: center; background-color: white"
    >
      <router-view :key="$router.path" />
    </v-main>

    <v-footer v-if="isLoaded" color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>MyFacebook</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import store from '@/store'
import Loader from "./components/LoaderComponent.vue";

import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    Loader,
  },

  data() {
    return {
      postFeed: false,
      isLoaded: false,
      links: [
      'About Us',
      'Team',
      'Services',
      'Contact Us',
    ],
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isLoaded = true;
        }, 1000);
      }
    };
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
  height: 50px;
  width: 100%;
  background-color: #124559;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
}

.v-application .primary.lighten-1 {
    background-color: #124559 !important;
    border-color: #124559 !important;
    margin-top: 20px;
}

.v-application .primary.lighten-2 {
    background-color: #598392 !important;
    border-color: #598392 !important;
}

.logo {
  width: 3%;
  height: 3%;
  justify-content: right;
  border-radius: 30px;
}

.login {
  height: 75%;
  width: 7%;
  border-radius: 50px;
  background-color: #598392;
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
