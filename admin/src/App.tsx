import { createBrowserRouter, isRouteErrorResponse, Navigate, RouterProvider, useRouteError } from 'react-router-dom'
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
import ErrorBoundary from './components/custom/errorHandler'
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from './components/ui/card'
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import { Button } from './components/ui/button'
import { ShiftHandover } from './pages/shiftHandover'
import { CreateShiftHandover } from './pages/createShiftHandover'
import { UserManagement } from './pages/userManagement'
import { ShiftHandover2 } from './pages/shiftHandover2'
import RiskMatrix from './pages/RiskMatrixs'
import { ShiftTemplateCard } from './components/custom/shiftTemplateCard'
import { ShiftTemplates } from './pages/ShiftTemplates'
import CreateShiftTemplate from './pages/CreateShiftTemplate'
import YellowBook from './pages/YellowBook'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {

  useEffect(() => {
    console.error('Unhandled error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-red-600">Oops! Something went wrong</CardTitle>
          <CardDescription>We apologize for the inconvenience</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error || 'An unexpected error occurred'}
            </AlertDescription>
          </Alert>
          {error.digest && (
            <p className="mt-2 text-sm text-gray-500">Error ID: {error.digest}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => window.location.pathname = '/'}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
          <Button onClick={() => reset()}>Try Again</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


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
      errorElement: <ErrorPage />,
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
        },
        {
          path: '/master-data/user',
          element: <ProtectedRoute><UserManagement /></ProtectedRoute>
        },
        {
          path: '/shift-handover',
          element: <ShiftHandover />
        },
        {
          path: '/shift-handover2',
          element: <ShiftHandover2 />
        },
        {
          path: '/create-shift-handover',
          element: <CreateShiftHandover />
        },
        {
          path: '/shift-templates',
          element: <ShiftTemplates />
        },
        {
          path: '/shift-template-create',
          element: <CreateShiftTemplate />
        },
        {
          path: '/risk-matrix',
          element: <RiskMatrix />
        },
        {
          path: '/yellow-book',
          element: <YellowBook />
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
    },
  ])

  return (
    <>
      <Toaster></Toaster>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  )
}

export default App
