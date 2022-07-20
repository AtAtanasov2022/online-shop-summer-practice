import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userInfo: {},
    userPosts: [],
    userLoggedIn: false,
    userTempInfo: {},
    postTempInfo: null,
    allPosts: [],
    allComments: [],
    allPostsById:[],
    postsByDate:[]
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },

    getUsersPosts(state) {
      return state.userPosts;
    },

    getTempUserInfo(state) {
      return state.userTempInfo;
    },

    getTempPostInfo(state) {
      return state.postTempInfo;
    },

    getAllPosts(state) {
      return state.allPosts;
    },

    getAllComments(state) {
      return state.allComments;
    },

    getAllPostsById(state) {
      return state.allPostsById;
    },
  },
  mutations: {
    initialiseStore(state) {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        state.userInfo = JSON.parse(userInfo);
      }
    },

    setuserdata(state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },

    setuserloggedin(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },

    settempuserdata(state, tempInfo) {
      state.userTempInfo = tempInfo;
    },

    settemppostdata(state, tempInfo) {
      state.postTempInfo = tempInfo;
    },

    setallposts(state, tempInfo) {
      state.allPosts = tempInfo;
    },

    setallcomments(state, tempInfo) {
      state.allComments = tempInfo;
    },

    logout(state) {
      state.userInfo = null;
      localStorage.setItem('userInfo', null);
    },

    setallpoststemporary(state, temporaryInfo) {
      state.allPostsById = temporaryInfo;
    },

    addUserPostToAllPosts(state, temporaryInfo) {
      state.allPosts.unshift(temporaryInfo);
    },

    addUserCommentToAllComments(state, temporaryInfo) {
      state.allComments.unshift(temporaryInfo);
    },
  },
  actions: {
    authUser(context, usersInfo) {
      axios.post("https://vue-social-network-api.herokuapp.com/api/auth", usersInfo).then(response => {
        console.log(response)
        context.commit('setuserdata', response.data)
        context.commit('setuserloggedin')
        router.push('/')
      }).catch(err => {
        console.log(err.message)
      })
      // debugger
      // console.log(usersInfo2.data);
    },

    signUpUser(context, usersInfo) {
      axios.post("https://vue-social-network-api.herokuapp.com/api/sign-up", usersInfo).then(response => {
        console.log(response)
        context.commit('setuserdata', response.data)
        context.commit('setuserloggedin')
        router.push('/')
      }).catch(err => {
        console.log(err.message)
      })
    },

    getUserInfoById(context, userId) {
      axios.get("https://vue-social-network-api.herokuapp.com/api/users/" + userId, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('settempuserdata', response.data)
      })
    },

    getPostInfoById(context, postId) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts/' + postId, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('settemppostdata', response.data)
      })
    },

    clearPostData(context, data) {
      context.commit('settemppostdata', data)
    },

    getPostsInfo(context) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts?limit=15', {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallposts', response.data)
      })
    },

    getCommentsInfo(context, postId) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/comments?post_id=' + postId, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallcomments', response.data)
      })
    },

    logout(context) {
      context.commit('logout');
    },

    getAllPostsByUsername(context, username) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts/?author.username=' + username, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallpoststemporary', response.data)
      })
    },

    addPost(context, postContent) {
      axios.post("https://vue-social-network-api.herokuapp.com/api/posts", {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        },
        
        "post" : "" + postContent
      }).then(response => {
        console.log(response)
        context.commit('addUserPostToAllPosts', response.data)
      }).catch(err => {
        console.log(err.message)
      })
    },

    addComment(context, commentContent, postId) {
      axios.post("https://vue-social-network-api.herokuapp.com/api/comments?post_id=" + postId, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        },
        
        "comment" : "" + commentContent
      }).then(response => {
        console.log(response)
        context.commit('addUserCommentToAllComments', response.data)
      }).catch(err => {
        console.log(err.message)
      })
    },

    getPostsByDate(context, pickedDate) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts/?created_at_like=' + pickedDate, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallposts', response.data)
      })
    }
  },
  modules: {
  }
})
