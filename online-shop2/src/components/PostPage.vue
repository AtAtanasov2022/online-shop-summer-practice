<template>
  <div class="post" v-if="postInfo && user">
    <img
      alt="User's avatar"
      :src="postInfo.author.image"
      class="image"
    />
    <p class="paragraph1">{{ postInfo.author.firstname }} {{ postInfo.author.lastname }}</p>
    <p class="content">
      Content<br />
      {{ postInfo.post }}
    </p>

    <div class="commentSection">
      <p class="contentTemporary">Text area for adding comp</p>
      <CommentsFeed
        :postId="postInfo.id"
      >

      </CommentsFeed>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import { mapState } from "vuex";
import CommentsFeed from '../components/CommentsFeed.vue'
import store from '@/store'

export default {
  name: "PostPage",
  
  components: {
    CommentsFeed
  },

  data() {
    return {
      user: store.getters.getUserInfo,
    };
  },

  computed: {
    ...mapGetters({
      postInfo: "getTempPostInfo",
    }),
    // ...mapState({
    //   currentPostInfo: (state) => state.postTempInfo,
    // }),
  },

  async beforeMount() {
    this.postId = this.$route.params.id;
    this.$store.dispatch("getPostInfoById", this.postId);
  },

  mounted() {
  }
};
</script>

<style scoped>
.post {
  height: 50%;
  width: 80%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 30px;
  background-color: #a9a9a9;
  margin-left: 10%;
  margin-top: 15%;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}

.commentSection {
  flex-direction: column;
}

.image {
  height: 25%;
  width: 11%;
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
  margin-left: 5%
}
</style>