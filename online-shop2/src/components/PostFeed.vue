<template>
  <div class="postfeed" v-if="posts">
    <AddPostComponent></AddPostComponent>
    <div class="post" v-for="(post, index) in posts" :key="post.id">
      <img
        :src="`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`"
        class="image"
      />

      <router-link
        class="paragraph1"
        :to="{ name: 'singleuserpage', params: { id: post.author.id } }"
      >
        {{ post.author.firstname }} {{ post.author.lastname }}
      </router-link>
      <!--Should be a link-->
      <div class="div2">
        <div class="content">
          {{ post.post }}
        </div>
        <div class="div3">
          <router-link
            :to="{ name: 'singlepost', params: { id: post.id } }"
            class="content router"
            >Date: {{ post.created_at }}</router-link
          >
          <!--Should be a link-->
          <p class="comments">Comments: {{ post.comments_count }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddPostComponent from "../components/AddPostComponent.vue";

export default {
  name: "PostFeed",

  components: {
    AddPostComponent,
  },

  computed: {
    ...mapGetters({
      posts: "getAllPosts",
      //posts2: "getAllPostsById"
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

.div2 {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
}

.div3 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  align-content: center;
}

.paragraph1 {
  text-decoration: none;
  color: black;
}

.image {
  height: 10%;
  width: 10%;
  border-radius: 30px;
  margin: 1%;
  border: thin solid;
}

.content {
  margin-left: 5%;
  height: 30%;
}

.comments {
  margin-left: 50%;
}

.router {
  text-decoration: none;
  color: inherit;
}
</style>
