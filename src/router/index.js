import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Games from '@/pages/Games'
import Movies from '@/pages/Movies'
import Software from '@/pages/Software'
import Donate from '@/pages/Donate'
import NotFound from '@/pages/NotFound'

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
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/software',
      name: 'Software',
      component: Software
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/notFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/notFound'
    }
  ]
})
