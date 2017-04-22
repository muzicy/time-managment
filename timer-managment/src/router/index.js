import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Home from '@/components/managment/Home'
import Timercor from '@/components/managment/Timercor'
import Timerpic from '@/components/managment/Timerpic'
import Timerset from '@/components/managment/Timerset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/home',
    	name: 'Home',         
    	component: Home
    },
    
    {
      path: '/logout',
      redirect: '/'
    }
  ]
})
