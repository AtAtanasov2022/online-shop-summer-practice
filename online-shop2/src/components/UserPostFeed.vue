<template>
  <div class="postfeed" v-if="posts">
    <h2>User's Posts</h2>
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
  width: 90%;
  display: flex;
  border-radius: 71px;
  background-color: white;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
}

.post {
  height: fit-content;
  width: 80%;
  position: relative;
  display: flex;
  border: thin solid;
  border-radius: 30px;
  background-color: #eff6e0;
  margin: auto;
  margin-top: 2%;
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
  height: 60px;
  width: 60px;
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

@media (max-width: 360px) and (max-height: 740px) {
  .postfeed {
    width: 100%;
  }

  .post {
    width: 90%;
    padding: 6px;
  }

  .filter {
    width: 80%;
  }

  .image {
    height: 60px;
    width: 60px;
    border-radius: 20px;
    margin: 1%;
    border: thin solid;
  }

  .div1 {
    padding-left: 2%;
  }

  .div2 {
    padding: 2% 3% !important;
  }
  .comments {
    margin-left: 2%;
  }
}
</style>
