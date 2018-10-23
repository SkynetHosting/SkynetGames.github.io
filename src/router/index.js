import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Donate from '@/pages/Donate'
import Downloads from '@/pages/Downloads'
import Games from '@/pages/Games'
import Software from '@/pages/Software'
import NotFound from '@/pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/software',
      name: 'Software',
      component: Software
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
