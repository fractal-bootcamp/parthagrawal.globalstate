import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Management } from './components/Management.tsx'
import { TabbedTasks } from './components/TabbedTasks.tsx'

const router = createBrowserRouter([
  {
    path: "/management",
    element: <Management />
  },
  {
    path: "/tabbed",
    element: <TabbedTasks />
  }
])




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
