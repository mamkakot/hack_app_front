import { createStore } from 'vuex'
import * as user from '@/store/modules/user.js'
import * as notification from '@/store/modules/notification.js'
import * as post from '@/store/modules/post.js'
import * as comment from '@/store/modules/comment.js'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    notification,
    post,
    comment
  }
})
