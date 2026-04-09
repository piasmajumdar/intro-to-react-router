import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Mobiles from './Components/Mobiles/Mobiles';
import Laptops from './Components/Laptops/Laptops';
import Users from './Components/Users/Users';
import User2 from './Components/User2/User2';

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json());


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense>
          <User2 usersPromise={usersPromise}></User2>
        </Suspense>
      }
    ]
  },
  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All blogs are here</div>
  },
  {
    path: 'app',
    element: <App></App>
  },
  {
    path: 'app2',
    Component: App
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
