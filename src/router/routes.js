import { NotFoundPage } from '@/pages/error-page';
import { HomePage } from '@/pages/home-page';
import { LoginPage } from '@/pages/login-page';
import { RegisterPage } from '@/pages/register-page';
import { SummaryPage } from '@/pages/summary-page';
import { TasksPage } from '@/pages/tasks-page';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      guest: true
    }
  },
  {
    path: '/summary',
    name: 'summary',
    component: SummaryPage,
    meta: {
      auth: true
    }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksPage,
    meta: {
      auth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error.404',
    component: NotFoundPage
  }
];

export default routes;
