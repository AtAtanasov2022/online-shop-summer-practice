<template>
  <div class="commentfeed" v-if="comments.length > 0">
    <AddComment :Id=postId></AddComment>
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <img
        :src="`https://xsgames.co/randomusers/assets/avatars/male/${pictureId}.jpg`"
        class="image"
      />
      <p class="paragraph1">
        {{ comment.author.username }}
      </p>
      <!--Should be a link-->
      <p class="content">
        Content<br />
        {{ comment.comment }}
      </p>

      <p class="content">Date: {{ comment.commented_at }}</p>
    </div>
  </div>
  <div v-else>
    <AddComment :Id=postId></AddComment>
    <p class="content">No comments</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddComment from "../components/AddComment.vue"

export default {
  name: "CommentsFeed",

  props: {
    postId: {
      type: String,
      required: true,
    },
  },

  components: {
    AddComment
  },

  computed: {
    pictureId() {
      return Math.floor(Math.random() * 10);
    },
    ...mapGetters({
      comments: "getAllComments",
    }),
  },

  mounted() {
    this.$store.dispatch("getCommentsInfo", this.postId);
  },
};
</script>

<style scoped>
.commentfeed {
  height: fit-content;
  width: 90%;
  position: relative;
  display: flex;
  background-color: #eff6e0;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 10px;
}

.comment {
  height: 40%;
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

.image {
  height: 10%;
  width: 10%;
  border-radius: 30px;
  margin: 1%;
  border: thin solid;
}

.content {
  margin-left: 5%;
}

.router {
  text-decoration: none;
  color: inherit;
}
</style>
