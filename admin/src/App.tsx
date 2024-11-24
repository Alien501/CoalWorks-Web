import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import FormBuilder from './components/custom/FormBuilder/FormBuilder'
import Migration from './components/custom/Migration/Migration'
import HomePage from './pages/Home'
import ComplianceDashboard from './pages/ComplianceDashboard'
import Layout from './components/custom/Layout'
import Locations from './pages/locations'
import MasterData from './pages/MasterData'
import MasterShift from './pages/MasterShift'
import MasterAsset from './pages/MasterAsset'
import Map from './pages/map'
import Dashboard from './pages/dashboard'
import { Plants } from './pages/plants'
import MapConfg from './pages/MapConfg'

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
        },
        {
          path:'master-data/plants',
          element: <Plants />
        },
        {
          path:'master-data/locations',
          element: <Locations />
        },
        {
          path: 'master-data/assets',
          element: <MasterAsset />
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
      path: '/map',
<<<<<<< HEAD
      element: <Map></Map>
    },
    {
      path: '/dashboard',
      element: <Dashboard />
=======
      element: <Map />
    },
    {
      path: '/map-confg',
      element: <MapConfg />
>>>>>>> 5ec4671dc4f8caca5e2049793bf04682735cfdb1
    }
  ])

  return <RouterProvider router={router} />
}

export default App
