<template>
  <div class="postfeed" v-if="posts">
    <AddPostComponent></AddPostComponent>
    <v-date-picker
      v-model="pickerInput"
      color="green lighten-1"
      header-color="primary"
    ></v-date-picker>
    <div class="post" v-for="(post, index) in posts" :key="post.id">
      <div class="div1">
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
      </div>
      <div class="div2">
        <div class="content">
          {{ post.post }}
        </div>
        <div class="div3">
          <router-link
            :to="{ name: 'singlepost', params: { id: post.id } }"
            class="router"
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

    data() {
        return {
            pickerInput: ''
        };
    },

  computed: {
    ...mapGetters({
      posts: "getAllPosts",
      //pickerInput: "getAllPost"
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
  /* height: 50%; */
  width: 80%;
  /* position: relative; */
  display: flex;
  border-radius: 71px;
  background-color: #ffffff;
  /* margin-left: 10%; */
  flex-wrap: wrap;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  margin-top: 20px;
}

.post {
  min-height: 160px;
  width: 80%;
  /* position: relative; */
  display: flex;
  border: thin solid;
  border-radius: 30px;
  background-color: #EFF6E0;
  /* margin-left: 10%; */
  margin-top: 3%;
  /* flex-wrap: nowrap; */
  align-items: center;
  /* align-content: center; */
  flex-direction: row;
}

.div1 {
  width: 20%;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100%;
}

.div2 {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  /* width: 100%; */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-right: 20px;
}

.div3 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-content: center;
  margin-top: 15px;
  /* margin-bottom: 2%; */
}

.paragraph1 {
  text-decoration: none;
  color: black;
  margin-left: 1%;
}

.image {
  height: 70px;
  width: 70px;
  border-radius: 20px;
  margin: 1%;
  border: thin solid;
}

.content {
  width: 100%;
  height: 30%;
  /* padding: 2% 3% 0%; */
}

.v-application p {
  margin-bottom: 0px;
}

.router {
  text-decoration: none;
  color: inherit;
}
</style>
