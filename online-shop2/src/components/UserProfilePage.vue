<template>
  <div class="profilePage">
    <img
      :src="`https://xsgames.co/randomusers/assets/avatars/male/${pictureId}.jpg`"
      class="image"
    />
    <p class="paragraph1">{{ userInfo.firstname }}</p>
    <p class="paragraph1">{{ userInfo.lastname }}</p>
    <br /><br /><br /><br /><br />
    <p class="email">Email: {{ userInfo.email }}</p>
    <router-link
      :to="{ name: 'singleuserfeed', params: { username: userInfo.username } }"
      class="router"
      >View All Posts</router-link
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserProfilePage",

  computed: {
    pictureId() {
      return Math.floor(Math.random() * 10);
    },
    ...mapGetters({
      userInfo: "getTempUserInfo",
    }),
  },

  async beforeMount() {
    this.id = this.$route.params.id;
    this.$store.dispatch("getUserInfoById", this.id);
  },
};
</script>

<style scoped>
.profilePage {
  height: 20%;
  width: 30%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 5%;
  background-color: #a9a9a9;
  margin: 10%;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}
.image {
  margin-top: 1%;
  margin-left: 3%;
  height: 30%;
  border-radius: 40%;
  border: thin solid;
  border-color: gray;
}
.paragraph1 {
  margin-top: 1%;
  margin-left: 3%;
  font-size: 1.5vw;
}
.email {
  margin-top: -10%;
  margin-left: 3%;
  margin: 1%;
}
.router {
  text-decoration: none;
  color: inherit;
}
</style>