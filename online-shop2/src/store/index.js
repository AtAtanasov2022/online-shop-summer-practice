import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userInfo: {},
    userPosts: [],
    userLoggedIn: false,
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
  },
  mutations: {
    setuserdata(state, userInfo) {
      state.userInfo = userInfo
    },

    setuserloggedin(state) {
      state.userLoggedIn = !state.userLoggedIn;
    }
  },
  actions: {
    authUser(context, usersInfo) {
      axios.post("https://vue-social-network-api.herokuapp.com/api/auth", usersInfo).then(response => {
        console.log(response)
        context.commit('setuserdata', response.data)
        context.commit('setuserloggedin')
      }).catch(err => {
        console.log(err.message)
      })
      // debugger
      // console.log(usersInfo2.data);
    }
  },
  modules: {
  }
})
