<template>
    <div class="profilePage">
       <img alt="User's avatar" :src="userInfo.image" class="image">
       <p class="paragraph1">{{userInfo.firstname}}</p>
       <p class="paragraph1">{{userInfo.lastname}}</p>
       <br><br><br><br><br>
       <p class="email">Email: {{userInfo.email}}</p>
       <p>View All Posts</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'UserProfilePage',

    props: {
        userId: {
            type: String,
            required: true
        }
    },

    computed: {
        ...mapGetters({
            userInfo: 'getTempUserInfo'
        }),
    },

    beforeMount() {
        this.$store.dispatch('getUserInfoById', this.userId);
    }
}

</script>

<style scoped>
    .profilePage {
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
    .image {
        margin-top: 1%;
        margin-left: 3%;
        height: 30%;
        border-radius: 40%;
        border: thin solid;
        border-color: gray;
    }
    .paragraph1 {
        margin-top: 1%;
        margin-left: 3%;
        font-size: 1.5vw;
    }
    .email {
        margin-top: -10%;
        margin-left: 3%;
        margin: 1%
    }
</style>