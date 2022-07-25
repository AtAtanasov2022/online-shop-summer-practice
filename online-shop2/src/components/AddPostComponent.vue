<template>
  <div class="postadd">
    <!-- <input
      type="text"
      v-model="postContent"
      placeholder="Content of the post"
      class="input"
    /> -->
    <v-textarea
      class="input-field"
      outlined
      rows="3"
      v-model="postContent"
      label="New post text"
    ></v-textarea>
    <!-- <button @click="submitPost" class="buttonpostadd" :disabled="!postContent">
      Add Post
    </button> -->
    <v-btn
      class="add-post-btn"
      :disabled="!enableAddPostBtn"
      rounded
      @click="submitPost"
      >Add Post</v-btn
    >
  </div>
</template>

<script>
//import { mapState } from "vuex";

export default {
  name: "AddPostComponent",
  data() {
    return {
      postContent: "",
    };
  },

  computed: {
    //   ...mapState({
    //       user: (state) => state.userInfo,
    //   }),
    enableAddPostBtn() {
      if (this.postContent.length > 0) {
        return true;
      }
      return false;
    },
  },

  methods: {
    submitPost() {
      this.$store.dispatch("addPost", this.postContent);
      this.postContent = "";
    },
  },
};
</script>

<style scoped>
.postadd {
  height: fit-content;
  width: 80%;
  margin-top: 1%;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
}

.add-post-btn {
  align-self: center;
  width: 150px;
}

.input-field {
  width: 100%;
  align-self: center;
}

.buttonpostadd {
  background-color: #124559;
  margin: auto;
  color: whitesmoke;
  font-size: 1vw;
}

::placeholder {
  color: black;
}

@media (max-width: 360px) and (max-height: 740px) {
  .postadd {
    width: 90%;
  }

  .add-post-btn {
    align-self: center;
    width: 200px;
  }

  .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }
}
</style>
