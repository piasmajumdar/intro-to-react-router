import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello from react</div>
  },
  {
    path: "about",
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All blogs are here</div>
  },
  {
    path: 'app',
    Component: App,
    // element: <App></App>
  },
  {
    path: 'app2',
    element: <App></App>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
