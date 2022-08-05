<template>
  <div>
    <div class="filters">
      <v-select
        class="filter"
        v-model="filterInput1"
        @change="filterInput1change"
        :items="names"
        chips
        label="Names"
        multiple
        outlined
      ></v-select>
      <v-select
        class="filter2"
        v-model="filterInput2"
        @change="filterInput2change"
        :items="dates"
        chips
        label="Created at"
        multiple
        outlined
      ></v-select>
    </div>

    <v-data-table
      v-if="posts"
      :headers="headers"
      :items="posts"
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
  </div>
</template>

<script>
//:items="filteredPosts"
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
          value: "post",
        },
        {
          text: "Created at",
          value: "created_at",
        },
        {
          text: "Author",
          value: "author.username",
        },
      ],
      names: [],
      dates: [],
      filterInput1: "",
      filterInput2: "",
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

    this.posts.forEach((element) => {
      this.names.push(element.author.username);
      this.dates.push(element.created_at);
    });

    // console.log(this.filteredPosts);
  },

  methods: {
    filterInput1change() {
      let querryParameter = "author.username=";

      this.filterInput1.forEach(element => {
        console.log(element);
        querryParameter = querryParameter + element + "&";
      });

      this.$store.dispatch("getFilteredPostUsername", querryParameter);

      // this.$forceUpdate();
      // console.log(this.filterInput1)
      // console.log(this.filterInput1.length)
      return "";
    },

    filterInput2change() {
      console.log(this.filterInput2[0])
      return this.filterInput2;
    },
  },
};
</script>

<style>
.v-data-table > .v-data-table__wrapper .v-data-table__mobile-table-row {
  border-top: thin solid !important;
  display: initial;
}

.theme--light.v-data-table {
  width: 95%;
  margin: auto;
  margin-top: -5px;
  border: thin solid;
  border-radius: 10px;
}

.theme--light.v-data-table .v-data-footer {
  border-top: thin solid;
}

.filters {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
}

@media (max-width: 360px) and (max-height: 740px) {
  .theme--light.v-data-table {
    width: 95%;
    margin: auto;
    margin-top: -5px;
    border: thin solid;
    border-radius: 10px;
  }

  .theme--light.v-data-table .v-data-footer {
    border-top: thin solid !important;
  }

  .filter {
    width: 40%;
  }

  .filter2 {
    width: 40%;
    margin-left: 6px !important;
  }

  .filters {
    margin-top: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 10px;
  }

  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot,
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    height: 10px !important;
  }
}
</style>
