<template>
  <div class="profilePage">
    <div class="imageparagraph">
      <img
        :src="`https://xsgames.co/randomusers/assets/avatars/male/${pictureId}.jpg`"
        class="image"
      />
      <p class="paragraph1">{{ userInfo.firstname }} {{ userInfo.lastname }}</p>
    </div>
    <div class="emaillink">
      <p class="email">Email: {{ userInfo.email }}</p>
      <router-link
        :to="{
          name: 'singleuserfeed',
          params: { username: userInfo.username },
        }"
        class="router"
        >View All Posts</router-link
      >
    </div>
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
  min-height: 320px;
  width: 45%;
  /* position: relative; */
  display: flex;
  border: thin solid;
  border-radius: 20px;
  background-color: #EFF6E0;
  margin: auto;
  margin-top: 50px;
  /* flex-wrap: wrap; */
  align-items: center;
  /* align-content: center; */
  flex-direction: row;
}
.imageparagraph {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100%;
}

.emaillink {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-right: 20px;
  height: 100%;
}

.image {
  height: 100px;
  width: 100px;
  border-radius: 20px;
  margin: 1%;
  border: thin solid;
}
.paragraph1 {
  color: black;
  margin-top: 1%;
  margin: auto;
  font-size: 1.5vw;
}
.email {
  margin-top: 10%;
  margin-left: 3%;
  margin: 1%;
  font-size: 1.5vw;
}
.router {
  text-decoration: none;
  color: inherit;
  font-size: 1.3vw;
}
</style>
