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
    allPosts2: [],
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

    getAllPosts2(state) {
      return state.allPosts2;
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

      const allPosts = localStorage.getItem('allPosts');
      if (allPosts) {
        state.allPosts = JSON.parse(allPosts);
      }

      const allPosts2 = localStorage.getItem('allPosts2');
      if (allPosts2) {
        state.allPosts2 = JSON.parse(allPosts2);
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
      localStorage.setItem('allPosts', JSON.stringify(tempInfo));
    },

    setallposts2(state, tempInfo) {
      state.allPosts2 = tempInfo;
      localStorage.setItem('allPosts2', JSON.stringify(tempInfo));
    },

    setallcomments(state, tempInfo) {
      state.allComments = tempInfo;
    },

    logout(state) {
      state.userInfo = null;
      localStorage.setItem('userInfo', null);
      localStorage.setItem('allPosts', null);
    },

    setallpoststemporary(state, temporaryInfo) {
      state.allPostsById = temporaryInfo;
    },

    addUserPostToAllPosts(state, temporaryInfo) {
      state.allPosts.unshift(temporaryInfo);
      let existingPosts = JSON.parse(localStorage.getItem("allPosts"));
      console.log(existingPosts)
      localStorage.setItem("post", JSON.stringify(temporaryInfo));
      existingPosts.unshift(temporaryInfo);
      console.log(existingPosts)
      localStorage.setItem("allPosts", JSON.stringify(existingPosts));
      
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

    getAllPostsInfo(context) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts', {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallposts2', response.data)
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
      }).catch (err => {
        console.log(err.message)}
      )
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
    },

    getFilteredPostUsername(context, parameter) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts/?' + parameter, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallposts2', response.data)
      })
    },

    getFilteredPostCreatedAt(context, parameter) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts/?' + parameter, {
        headers: {
          "Authorization": "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('setallposts2', response.data)
      })
    }
  },
  modules: {
  }
})
