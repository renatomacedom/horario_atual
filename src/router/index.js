import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fluxo_financeiro from '../components/Fluxo_financeiro'
import Lista_de_campeonato_volei from '../components/Lista_de_campeonato_volei'
import Lista_de_campeonato_bt from '../components/Lista_de_campeonato_bt'
import Lista_de_artigos from '../components/Lista_de_artigos'
import Lista_de_campeonato_futevolei from '../components/Lista_de_campeonato_futevolei'
import Footer from '../components/Footer'
import Nav from '../components/Nav'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lista_de_campeonato_volei',
    component: Lista_de_campeonato_volei
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
    path: '/Montar_quadra_areia',
    name: 'Montar_quadra_areia',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Montar_quadra_areia.vue')
    }
  },
  {
    path: '/FEVECE',
    name: 'Fevece',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Fevece.vue')
    }
  },
  {
    path: '/O_que_e_o_esporte',
    name: 'O_que_e_o_esporte',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/O_que_e_o_esporte.vue')
    }
  },
  {
    path: '/Melhores_bolas',
    name: 'Melhores_bolas',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Melhores_bolas.vue')
    }
  },
  {
    path: '/Larvas_migras',
    name: 'Larvas_migras',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Larvas_migras.vue')
    }
  },
  {
    path: '/Circuito_brasileiro_VP',
    name: 'Circuito_brasileiro_VP',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Circuito_brasileiro_VP.vue')
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
    {
      path: '/Lista_de_campeonato_futevolei',
      name: 'Lista_de_campeonato_futevolei',
      component: Lista_de_campeonato_futevolei
    },
    {
      path: '/Lista_de_artigos',
      name: 'Lista_de_artigos',
      component: Lista_de_artigos
    },
    {
      path: '/horario-atual',
      name: 'Home',
      component: Home
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
