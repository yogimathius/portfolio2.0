import ContactPage from '../pages/Contact'
import HomePage from '../pages/Home.js'
import Login from '../components/Login/Login';

const routes = [
  {
    path: '/home',
    component: HomePage,
    isPrivate: false,
  },
  {
    path: '/contact',
    component: ContactPage,
    isPrivate: false,
  },
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  }
];

export default routes;
