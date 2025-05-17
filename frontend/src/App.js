/*import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Home from './home/index';
import Discover from './Discover/discover';
import Jobs from './jobs/index';

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
*/

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Login from './auth/login';
import Signup from './auth/signup';
import Home from './home/index';
import Discover from './Discover/Discover';
import BlogDetails from './Discover/BlogDetails';
import Jobs from './jobs/index';

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
    path: '/discover/blog/:id',
    element: <BlogDetails />
  },
  {
    path: '/jobs',
    element: <Jobs />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  );
}

export default App;
