<template>
  <div class="postfeed" v-if="posts">
    <router-link :to="'/login'" class="router">
      <div class="post" v-for="post in posts" :key="post.id">
        <img alt="User's avatar" :src="post.author.image" class="image" />
        <p class="paragraph1">
          {{ post.author.firstname }} {{ post.author.lastname }}
        </p>
        <!--Should be a link-->
        <p class="content">
          Content<br />
          {{ post.post }}
        </p>
        <p class="content">Date: {{ post.created_at }}</p>
        <!--Should be a link-->
        <p class="content">Comments: {{ post.comments_count }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostFeed",

  computed: {
    ...mapGetters({
      posts: "getAllPosts",
    }),
  },

  beforeMount() {
    this.$store.dispatch("getPostsInfo");
  },
};
</script>

<style scoped>
.postfeed {
  height: 50%;
  width: 80%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 71px;
  background-color: #a9a9a9;
  margin-left: 10%;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}

.post {
  height: 40%;
  width: 80%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 30px;
  background-color: #a9a9a9;
  margin-left: 10%;
  margin-top: 3%;
  font-weight: 100;
  font-weight: 100;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}

.image {
  height: 10%;
  width: 10%;
  border-radius: 30px;
  margin: 1%;
  border: thin solid;
}

.content {
  margin-left: 1%;
}

.router {
    text-decoration: none;
    color: inherit;
}
</style>