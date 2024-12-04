import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
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
import Dashboard from './pages/dashboard'
import { Plants } from './pages/plants'
import SectionsPage, { NewPlants } from './pages/plants2'
import MapConfg from './pages/MapConfg'
import NewMap from './pages/MapTest'
import Positions from './pages/positions'
import { toast, Toaster } from 'sonner'
import RolesAndPermission from './pages/rolesAndPermissions'
import RoundPlan from './pages/roundePlan'
import CreateRound from './pages/createRound'
import { MineInit } from './pages/mapConfgNew'
import InitPage from './pages/initPage'
import { useEffect, useState } from 'react'
import { fetchInitStatus } from './utils/fetchInitStatus'
import { ProtectedRoute } from './components/custom/ProtectedRoutes'
import MinesPage from './pages/MasterMine'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initStatus, setInitStatus] = useState<{
    status: boolean | null, 
    checked: boolean
  }>({
    status: null,
    checked: false
  });

  useEffect(() => {
    const checkInitializationStatus = async () => {
      try {
        const storedInitStatus = localStorage.getItem('isInit');
        
        if (storedInitStatus === 'true') {
          setInitStatus({ status: true, checked: true });
          setIsLoading(false);
          return;
        }

        const res = await fetchInitStatus();
        console.log(res)
        if (res.status) {
          localStorage.setItem('isInit', 'true');
          setInitStatus({ status: true, checked: true });
        } else {
          localStorage.setItem('isInit', 'false');
          setInitStatus({ status: false, checked: true });
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Initialization check failed:', error);
        setInitStatus({ status: false, checked: true });
        setIsLoading(false);
      }
    };

    checkInitializationStatus();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: isLoading? null: (
            initStatus.status? <ProtectedRoute><HomePage /></ProtectedRoute>: <Navigate to='/init' />
          )
        },
        {
          path: 'home',
          element: <ProtectedRoute><HomePage /></ProtectedRoute>
        },
        {
          path: 'master-data',
          element: <ProtectedRoute><MasterData /></ProtectedRoute>
        },
        {
          path: '/rounds',
          element: <ProtectedRoute><RoundPlan /></ProtectedRoute>
        },
        {
          path: '/rounds-create',
          element: <ProtectedRoute><CreateRound /></ProtectedRoute>
        },
        {
          path: 'master-data/shift',
          element: <ProtectedRoute><MasterShift /></ProtectedRoute>
        },
        {
          path: 'master-data/plants',
          element: <ProtectedRoute><SectionsPage /></ProtectedRoute>
        },
        {
          path: 'master-data/locations',
          element: <ProtectedRoute><Locations /></ProtectedRoute>
        },
        {
          path: 'master-data/assets',
          element: <ProtectedRoute><MasterAsset /></ProtectedRoute>
        },
        {
          path: '/master-data/positions',
          element: <ProtectedRoute><Positions /></ProtectedRoute>
        },
        {
          path: '/master-data/permissions',
          element: <ProtectedRoute><RolesAndPermission /></ProtectedRoute>
        },
        {
          path: '/master-data/mine',
          element: <ProtectedRoute><MinesPage /></ProtectedRoute>
        }
      ]
    },
    {
      path: '/login',
      element: <Login />,
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
    // {
    //   path: '/map',
    //   element: <Map></Map>
    // },
    {
      path: '/mine-init',
      element: <MineInit />
    },
    {
      path: '/map-test',
      element: <NewMap />
    },
    {
      path: '/init',
      element: <InitPage />
    }
  ])

  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </>
  )
}

export default App
