import Vue from 'vue';
import Router from 'vue-router';
import Form from './components/Form/Form.vue';
import Grid from './components/Grid/Grid.vue';
import Edit from './components/Edit/Edit.vue';
import Profile from './components/Profile/Profile.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/new',
      name: 'Form',
      component: Form,
    },
    {
      path: '/',
      name: 'grid',
      component: Grid,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ],
});
