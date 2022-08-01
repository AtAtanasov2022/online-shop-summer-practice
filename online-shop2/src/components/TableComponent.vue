<template>
  <v-data-table
    v-if="posts"
    :headers="headers"
    :items="filteredPosts"
    :items-per-page="5"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus',
    }"
    >Hello</v-data-table
  >
</template>

<script>
// import mapGetters  from "vuex";
import { mapState } from "vuex";

export default {
  name: "TableComponent",

  data() {
    return {
      filteredPosts: [],
      headers: [
        {
          text: "Post",
          align: "start",
          value: "id",
        },
        {
          text: "Content",
          value: "content",
        },
        {
          text: "Created at",
          value: "createdAt",
        },
        {
          text: "Author",
          value: "authorUsername",
        },
      ],
    };
  },

  computed: {
    // ...mapGetters({
    //   posts: "getAllPosts2",
    // }),

    ...mapState({
      posts: (state) => state.allPosts2,
    }),
  },

  beforeMount() {
    this.$store.dispatch("getAllPostsInfo");

    let id = 1;
    this.posts.forEach((element) => {
      let temporartObject = {
        id: id,
        content: element.post,
        createdAt: element.created_at,
        authorUsername: element.author.username,
      };
      id++;
      this.filteredPosts.push(temporartObject);
    });

    // console.log(this.filteredPosts);
  },

  methods: {},
};
</script>

<style>
@media (max-width: 360px) and (max-height: 740px) {
  .v-data-table > .v-data-table__wrapper .v-data-table__mobile-table-row {
    border-top: thin solid !important;
    display: initial;
  }

  .theme--light.v-data-table {
    width: 95%;
    margin: auto;
    margin-top: 10px;
    border: thin solid;
    border-radius: 10px;
  }
  
  .theme--light.v-data-table .v-data-footer {
    border-top: thin solid !important;
  }
}
</style>
