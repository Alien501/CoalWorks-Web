import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import FormBuilder from './components/custom/FormBuilder/FormBuilder'
import Migration from './components/custom/Migration/Migration'
import HomePage from './pages/Home'
import ComplianceDashboard from './pages/ComplianceDashboard'
import Layout from './components/custom/Layout'
import Plants from './pages/plants'
import Locations from './pages/locations'
import MasterData from './pages/MasterData'
import MasterShift from './pages/MasterShift'

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
        {
          path: 'master-data',
          element: <MasterData />
        },
        {
          path: 'master-data/shift',
          element: <MasterShift />
        }
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
    },
    {
      path:'/master-data/plants',
      element: <Plants />
    },
    {
      path:'/master-data/locations',
      element: <Locations />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
