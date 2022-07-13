<template>
    <div class="postfeed" v-if="posts">
        <div class="post" v-for="post in posts" :key="post.id">
            <img alt="User's avatar" :src="post.author.image" class="image">
            <p class="paragraph1">{{post.author.firstname}} {{post.author.lastname}}</p> <!--Should be a link-->
            <p>Content<br> {{post.post}}</p>
            <p>Date: {{post.created_at}}</p> <!--Should be a link-->
            <p>Comments: {{post.comments_count}}</p>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'PostFeed',

    computed: {
        ...mapGetters({
            posts: 'getAllPosts'
        }),
    },

    beforeMount() {
        this.$store.dispatch('getPostsInfo');
    }
}
</script>

<style scoped>
    .postfeed {
        height: 50%;
        width: 50%;
        position: relative;
        display: flex;
        border: thin solid;
        border-radius: 5%;
        background-color: #a9a9a9;
        margin: 10%;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: flex-start;
    }
</style>