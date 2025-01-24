import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Home from './home/index';

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
])

function App() {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default App;