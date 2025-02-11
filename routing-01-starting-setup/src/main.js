import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, //리
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers, //teams/t1 으로 이동
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
    },
    {
      //Catch All 옵션, 마지막에 작성해야함
      path: '/:notFound(.*)',
      component: () => import('./components/nav/NotFound.vue'),
    },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

//네비게이션가드
router.beforeEach(function (to, from, next) {
  //해당 페이지로 이동, 아무 파람값이 없으면 그냥 이동시켜줌
//   if (to.name === 'team-members') {
//     next({ name: 'team-members', params: { teamId: 't2' } });
//   }
next();
});
app.use(router);

app.mount('#app');
