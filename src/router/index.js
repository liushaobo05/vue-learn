import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require.ensure([], () => r(require('../pages/home/home')), 'home')
    },
    {
      path: '/item',
      component: r => require.ensure([], () => r(require('../pages/item/item')), 'item')
    },
    {
      path: '/score',
      component: r => require.ensure([], () => r(require('../pages/score/score')), 'score')
    },
    {
      path: '/404',
      component: r => require.ensure([], () => r(require('../pages/other/404')), '404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
