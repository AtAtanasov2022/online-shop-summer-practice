<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
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
      desserts: [
        {
          id: "1",
          content: "Something1",
          createdAt: "2222-12-22",
          authorUsername: "black1",
        },
        {
          id: "2",
          content: "Something2",
          createdAt: "2222-12-23",
          authorUsername: "black2",
        },
        {
          id: "3",
          content: "Something3",
          createdAt: "2222-12-24",
          authorUsername: "black3",
        },
        {
          id: "4",
          content: "Something4",
          createdAt: "2222-12-25",
          authorUsername: "black4",
        },
      ],

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
      },

      methods: {},
    };
  },
};
</script>

<style scoped></style>
