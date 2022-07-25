<template>
  <div class="profilePage">
    <div class="imageparagraph">
      <img
        :src="`https://xsgames.co/randomusers/assets/avatars/male/${pictureId}.jpg`"
        class="image"
      />
      <p class="paragraph1">{{ userInfo.firstname }} {{ userInfo.lastname }}</p>
    </div>
    <div class="emaillink text-center">
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
  background-color: #eff6e0;
  margin: auto;
  margin-top: 50px;
  /* flex-wrap: wrap; */
  align-items: center;
  /* align-content: center; */
  flex-direction: row;
}
.imageparagraph {
  width: 80%;
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

@media (max-width: 360px) and (max-height: 740px) {
  .profilePage {
    min-height: 300px;
    width: 70%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .imageparagraph {
    margin-top: 20px;
  }
  .image {
    height: 130px;
    width: 130px;
  }
  .emaillink {
    width: 80%;
    margin-top: 20px;
  }
  .paragraph1 {
    margin-top: 3px !important;
    font-size: 5.5vw;
  }
  .email {
    font-size: 3.5vw;
    width: 100%;
    margin: 0;
  }
  .router {
    margin-top: 24px;
    font-size: 4.5vw;
  }
}
</style>
