<template>
  <!-- :src="postInfo.author.image" -->
  <div class="post" v-if="postInfo && user">
    <img
      alt="User's avatar"
      :src="`https://xsgames.co/randomusers/assets/avatars/male/${pictureId}.jpg`"
      class="image"
    />
    <p class="paragraph1">
      {{ postInfo.author.firstname }} {{ postInfo.author.lastname }}
    </p>
    <p class="content">
      Content<br />
      {{ postInfo.post }}
    </p>

    <div class="commentSection">
      <CommentsFeed :postId="id"> </CommentsFeed>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import { mapState } from "vuex";
import CommentsFeed from "../components/CommentsFeed.vue";
import store from "@/store";

export default {
  name: "PostPage",

  components: {
    CommentsFeed,
  },

  data() {
    return {
      user: store.getters.getUserInfo,
      id: null
    };
  },

  computed: {
    pictureId() {
      return Math.floor(Math.random() * 10);
    },
    ...mapGetters({
      postInfo: "getTempPostInfo",
    }),
    // ...mapState({
    //   currentPostInfo: (state) => state.postTempInfo,
    // }),
  },
  beforeDestroy() {
      this.$store.dispatch("clearPostData", null)
  },

  async beforeMount() {
    this.id = this.$route.params.id;
  },

  async mounted() {
    let postId = this.$route.params.id;
    await this.$store.dispatch("getPostInfoById", postId);
  },
};
</script>

<style scoped>
.post {
  /* height: 600px; */
  height: fit-content;
  padding: 8px;
  width: 80%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 30px;
  background-color: #eff6e0;
  margin: auto;
  margin-top: 50px;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}

.commentSection {
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
}

.image {
  height: 130px;
  width: 130px;
  border-radius: 30px;
  margin-left: 2%;
  border: thin solid;
}

.paragraph1 {
  margin-left: 1%;
  font-size: 2vw;
}

.content {
  margin: 1%;
  font-size: 1.3vw;
}

.contentTemporary {
  width: 100%;
  margin-left: 5%;
}
</style>
