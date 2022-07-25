<template>
  <div class="postfeed" v-if="posts">
    <AddPostComponent></AddPostComponent>
    <v-expansion-panels focusable class="filter">
      <v-expansion-panel @click="datePicker = true">
        <v-expansion-panel-header>Filter by date</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-date-picker
            v-model="pickerInput"
            color="green lighten-1"
            header-color="primary"
          ></v-date-picker>
          <v-btn @click="cancel" v-if="datePicker">Cancel</v-btn>
          <v-btn @click="filterByDate" v-if="datePicker">Filter</v-btn>
          <v-btn @click="setClearFilter" v-if="clearFilter">Clear filter</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="post" v-for="(post, index) in posts" :key="post.id">
      <Loader v-if="!isLoaded"></Loader>
      <div v-else-if="isLoaded" class="helploadeffect">
        <div class="div1">
          <img
            :src="`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`"
            class="image"
          />
          <router-link
            class="paragraph1 text-center"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddPostComponent from "../components/AddPostComponent.vue";
import Loader from "../components/LoaderComponent.vue";

export default {
  name: "PostFeed",

  components: {
    AddPostComponent,
    Loader,
  },

  data() {
    return {
      pickerInput: "",
      datePicker: false,
      clearFilter: false,
      isLoaded: false,
    };
  },

  computed: {
    ...mapGetters({
      posts: "getAllPosts",
    }),
  },

  beforeMount() {
    this.$store.dispatch("getPostsInfo");
  },

  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  },

  methods: {
    setDatePicker() {
      this.datePicker = !this.datePicker;
    },

    cancel() {
      this.pickerInput = "";
    },

    filterByDate() {
      this.$store.dispatch("getPostsByDate", this.pickerInput);
      this.datePicker = !this.datePicker;
      this.clearFilter = !this.clearFilter;
    },

    setClearFilter() {
      this.$store.dispatch("getPostsInfo");
      this.clearFilter = !this.clearFilter;
      this.datePicker = !this.datePicker;
    },
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
  flex-direction: column;
}

.picker {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-end;
  margin-top: 10px;
}

.post {
  min-height: 160px;
  width: 80%;
  /* position: relative; */
  display: flex;
  border: thin solid;
  border-radius: 30px;
  background-color: #eff6e0;
  /* margin-left: 10%; */
  margin-top: 3%;
  /* flex-wrap: nowrap; */
  align-items: center;
  /* align-content: center; */
  flex-direction: row;
}

.helploadeffect {
  height: 100%;
  width: 100%;
  /* position: relative; */
  display: flex;
  /* border: thin solid; */
  border-radius: 30px;
  background-color: #eff6e0;
  /* margin-left: 10%; */
  /* margin-top: 3%; */
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

.filter {
  width: 40%;
  margin: auto;
  margin-top: 10px;
}

@media (max-width: 360px) and (max-height: 740px) {
  .postfeed {
    width: 100%;
  }

  .post {
    width: 90%;
    padding: 1px;
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
    padding: 1% 3% !important
  }
}
</style>
