import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '@/components/teams/TeamsList';
import TeamsFooter from '@/components/teams/TeamsFooter';
import TeamMembers from '@/components/teams/TeamMembers';
import UsersList from '@/components/users/UsersList';
import UsersFooter from '@/components/users/UsersFooter';
import NotFound from '@/components/nav/NotFound';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams', path: '/teams', components: { default: TeamsList, footer: TeamsFooter }, children: [
        { name: 'team-members', path: '/teams/:teamId', component: TeamMembers, props: true }
      ]
    },
    {
      path: '/users',
      meta: { needsAuth: true },
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('needs auth');
    next();
  } else {
    next();
  }
});

export default router;