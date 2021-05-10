import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound';
import CoachesList from './pages/coaches/CoachesList';
import CoachDetails from './pages/coaches/CoachDetails';
import CoachRegister from './pages/coaches/CoachRegister';
import RequestsList from './pages/requests/RequestsList';
import ContactCoach from './pages/requests/ContactCoach';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/requests', component: RequestsList },
    { path: '/register', component: CoachRegister },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
