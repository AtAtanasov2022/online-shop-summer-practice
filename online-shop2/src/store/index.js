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
    postTempInfo: {},
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },

    getUsersPosts(state) {
      return state.userPosts;
    },

    getUserLoggedIn(state) {
      return state.userLoggedIn;
    },

    getTempUserInfo(state) {
      return state.userTempInfo;
    },

    getTempPostInfo(state) {
      return state.postTempInfo;
    },
  },
  mutations: {
    setuserdata(state, userInfo) {
      state.userInfo = userInfo
    },

    setuserloggedin(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },

    settempuserdata(state, tempInfo) {
      state.userTempInfo = tempInfo;
    },

    settemppostdata(state, tempInfo) {
      state.postTempInfo = tempInfo;
    }
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
          "Authorization" : "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('settempuserdata', response.data)
      })
    },

    getPostInfoById(context, postId) {
      axios.get('https://vue-social-network-api.herokuapp.com/api/posts/'+postId, {
        headers: {
          "Authorization" : "MTU2Njk3NjQwNTMzNw=="
        }
      }).then(response => {
        console.log(response)
        context.commit('settemppostdata', response.data)
      })
    }
  },
  modules: {
  }
})
