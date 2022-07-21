<template>
  <Loader v-if="!isLoaded"></Loader>
  <div v-else class="main">
    <h2 style="margin: auto; margin-top: 20px">Welcome to MyFacebook</h2>
    <!-- <div class="feed" v-if="user">
      <p>Here will be the list</p>
      <div class="feed2"> -->
    <PostFeed v-if="user"> </PostFeed>
    <!-- </div>
    </div> -->
    <div v-else>
      <p>Please log in</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import UserProfilePage from '../components/UserProfilePage.vue';
//import PostPage from '../components/PostPage.vue';
import PostFeed from "../components/PostFeed.vue";
import Loader from "../components/LoaderComponent.vue";

export default {
  name: "HomeView",

  data() {
    return {
      isLoaded: false
    };
  },

  components: {
    //UserProfilePage,
    //PostPage,
    PostFeed,
    Loader
  },

  computed: {
    ...mapGetters({
      user: "getUserInfo",
    }),
  },

  mounted() {
    setTimeout(() => {  this.isLoaded = true; }, 1000);
  }
};
</script>

<style>
.main {
  background-color: white;
  /* width: 100%;
    height: 100%; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.feed {
  background-color: #dcdcdc;
  width: 90%;
  height: 70%;
  margin-top: 5%;
  border-radius: 0%;
}
</style>
