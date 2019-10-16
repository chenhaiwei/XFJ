import Vue from 'vue'
import Router from 'vue-router'
import modules from './modules'

import Index from '@/views'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: () => import('@/views/user/login')
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        ...modules
      ]
    }
  ]
})
