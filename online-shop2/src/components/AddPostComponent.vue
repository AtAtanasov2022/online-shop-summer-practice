<template>
    <div class="postadd">
        <input type="text" v-model="postContent" placeholder="Content of the post" class="input">
        <button @click="submitPost" class="buttonpostadd" :disabled="!postContent">Add Post</button>
    </div>
</template>

<script>
//import { mapState } from "vuex";

export default {
    name: "AddPostComponent",
    data() {
        return {
            postContent: '',
        };
    },

    // computed: {
    //     ...mapState({
    //         user: (state) => state.userInfo,
    //     }), 
    // },

    methods: {
        submitPost() {
            this.$store.dispatch("addPost", this.postContent);
        }
    }

}
</script>

<style scoped>
    .postadd {
        height: 20%;
        width: 90%;
        /* margin-left: 5%; */
        margin-top: 1%;
        position: relative;
        display: flex;
        border: thin solid;
        border-radius: 30px;
        background-color: #a9a9a9;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: flex-start;
    }

    .input {
        height: 20%;
        width: 90%;
        margin-left: 5%;
        margin-top: 1%;
    }

    .buttonpostadd {
        height: 20%;
        width: 90%;
        margin-left: 5%;
        margin-top: 1%;
    }
</style>