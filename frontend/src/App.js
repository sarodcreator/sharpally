import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Home from './home/index';
import Discover from './jobs/index';
import Jobs from './discover/index';

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/jobs',
    element: <Jobs />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default App;