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

.add-post-btn {
  align-self: center;
  width: 150px;
}

.input-field {
  width: 100%;
  align-self: center;
}

/* .v-input {
  align-items: flex-start;
  display: flex;
  flex: 1 1 auto;
  font-size: 16px;
  letter-spacing: normal;
  max-width: 100%;
  text-align: left;
}

.v-input__control {
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
}

.v-input__slot {
  align-items: center;
  color: inherit;
  display: flex;
  margin-bottom: 8px;
  min-height: inherit;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
} */

/* .input {
  height: 20%;
  width: 90%;
  margin-left: 5%;
  margin-top: 1%;
} */

.buttonpostadd {
  /* height: 75%;
  width: 7%; */
  /* border-radius: 50px; */
  background-color: #124559;
  margin: auto;
  /* display: flex; */
  /* align-items: center; */
  /* text-decoration: none; */
  color: whitesmoke;
  font-size: 1vw;
  /* justify-content: center;
  align-content: center; */
}

::placeholder {
  color: black;
}
</style>
