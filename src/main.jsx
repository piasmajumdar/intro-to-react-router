import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';



const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from react router</div>
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
    element:<App></App>
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
