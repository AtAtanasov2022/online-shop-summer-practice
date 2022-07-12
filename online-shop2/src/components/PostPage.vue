<template>
    <div class="post" v-if="postInfo" >
        <img alt="User's avatar" :src="postInfo.author.image" class="image">
        <p class="paragraph1">{{postInfo.author.firstname}}</p>
        <p class="paragraph1">{{postInfo.author.lastname}}</p>
        <p>Content<br> {{postInfo.post}}</p>

        <p>Text area for adding comp</p>
        <p>Comments should be here</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PostPage',

    props: {
        postId: {
            type: String,
            required: true
        }
    },

    computed: {
        ...mapGetters({
            postInfo: 'getTempPostInfo'
        }),
    },

    beforeMount() {
        this.$store.dispatch('getPostInfoById', this.postId);
    }
}
</script>

<style scoped>
    .post {
        height: 20%;
        width: 30%;
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