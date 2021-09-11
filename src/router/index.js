import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fluxo_financeiro from '../components/Fluxo_financeiro'
import Lista_de_campeonato_volei from '../components/Lista_de_campeonato_volei'
import Lista_de_campeonato_bt from '../components/Lista_de_campeonato_bt'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
    {
      path: '/Fluxo_financeiro',
      name: 'Fluxo_financeiro',
      component: Fluxo_financeiro
    },
    {
      path: '/Lista_de_campeonato_volei',
      name: 'Lista_de_campeonato_volei',
      component: Lista_de_campeonato_volei
    },
    {
      path: '/Lista_de_campeonato_bt',
      name: 'Lista_de_campeonato_bt',
      component: Lista_de_campeonato_bt
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
