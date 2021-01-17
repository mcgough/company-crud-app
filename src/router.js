import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Details from './views/Details.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/company/:id',
      component: Details,
    },
    {
      path: '/edit/:id',
      component: Edit,
    },
  ],
});
