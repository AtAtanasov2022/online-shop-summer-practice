<template>
  <div class="commentadd">
    <v-textarea
      class="input-field"
      outlined
      rows="1"
      v-model="commentContent"
      label="New comment text"
    ></v-textarea>
    <!-- <button @click="submitPost" class="buttonpostadd" :disabled="!postContent">
      Add Post
    </button> -->
    <v-btn
      class="add-comment-btn"
      :disabled="!enableAddCommentBtn"
      rounded
      @click="submitComment"
      >Add Comment</v-btn
    >
  </div>
</template>

<script>
//import { mapState } from "vuex";

export default {
  name: "AddCommentComponent",

    props: {
        Id: {
            type: String,
            required: true
        }
    },

  data() {
    return {
      commentContent: "",
    };
  },

  computed: {
    //   ...mapState({
    //       user: (state) => state.userInfo,
    //   }),
    enableAddCommentBtn() {
      if (this.commentContent.length > 0) {
        return true;
      }
      return false;
    },
  },

  methods: {
    submitComment() {
      this.$store.dispatch("addComment", this.commentContent, this.Id);
      this.commentContent = "";
    },
  },
};
</script>

<style scoped>
.commentadd {
  /* padding: 20px; */
  height: fit-content;
  width: 80%;
  /* margin-left: 5%; */
  margin-top: 1%;
  /* position: relative; */
  display: flex;
  /* border: thin solid; */
  border-radius: 30px;
  /* background-color: #598392; */
  /* align-items: stretch; */
  flex-direction: column;
}

.add-comment-btn {
  align-self: center;
  width: 150px;
}

.input-field {
  width: 100%;
  align-self: center;
}

</style>
