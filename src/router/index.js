import Vue from 'vue'
import Router from 'vue-router'
import listaProdutos from '@/components/listaProdutos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lista-produtos',
      component: listaProdutos
    }
  ]
})
