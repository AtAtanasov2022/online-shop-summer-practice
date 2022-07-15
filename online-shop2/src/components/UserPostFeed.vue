<template>
  <div class="postfeed" v-if="posts">
    <div class="post" v-for="post in posts" :key="post.id">
      <img alt="User's avatar" :src="post.author.image" class="image" />
      <router-link
        class="paragraph1"
        :to="{ name: 'singleuserpage', params: { id: post.author.id } }"
      >
        {{ post.author.firstname }} {{ post.author.lastname }}
      </router-link>
      <!--Should be a link-->
      <p class="content">
        Content<br />
        {{ post.post }}
      </p>
      <router-link
        :to="{ name: 'singlepost', params: { id: post.id } }"
        class="content router"
        >Date: {{ post.created_at }}</router-link
      >
      <!--Should be a link-->
      <p class="comments">Comments: {{ post.comments_count }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserPostFeed",

  computed: {
    pictureId() {
      return Math.floor(Math.random() * 10);
    },
    ...mapGetters({
      posts: "getAllPostsById",
    }),
  },

  beforeMount() {
    const username = this.$route.params.username;
    this.$store.dispatch("getAllPostsByUsername", username);
  },
};
</script>

<style scoped>
.postfeed {
  height: 100%;
  width: 70%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 71px;
  background-color: #a9a9a9;
  margin-left: 15%;
  margin-top: 5%;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}

.post {
  height: 12%;
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

.paragraph1 {
  text-decoration: none;
  color: black;
}

.image {
  height: 23%;
  width: 7%;
  border-radius: 30px;
  margin: 1%;
  border: thin solid;
}

.content {
  margin-left: 2%;
}

.comments {
  margin-left: 50%;
}

.router {
  text-decoration: none;
  color: inherit;
}
</style>