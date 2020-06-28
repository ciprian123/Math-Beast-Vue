import Vue from 'vue'
import Router from 'vue-router'


import Calculator from '@/components/Calculator'
import CurrencyConverter from '@/components/CurrencyConverter'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/CurrencyConverter',
      name: 'CurrencyConverter',
      component: CurrencyConverter
    }
  ]
})
