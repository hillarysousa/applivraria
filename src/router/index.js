import Vue from 'vue'
import Router from 'vue-router'
import listaProdutos from '@/components/listaProdutos'
import carrinho from '@/components/carrinho'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'produtos',
      component: listaProdutos
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: carrinho
    }
  ]
})
