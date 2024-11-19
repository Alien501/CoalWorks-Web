import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import FormBuilder from './components/custom/FormBuilder/FormBuilder'
import Migration from './components/custom/Migration/Migration'
import HomePage from './pages/Home'
import ComplianceDashboard from './pages/ComplianceDashboard'
import Layout from './components/custom/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'home',
          element: <HomePage />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: '/form',
      element: <FormBuilder />
    },
    {
      path: '/migrate',
      element: <Migration />
    },
    {
      path: '/compliance',
      element: <ComplianceDashboard />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
