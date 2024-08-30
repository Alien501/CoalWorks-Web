import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import { Toaster } from './components/ui/sonner'
import Home from './pages/Home/Home'
import ManageWorker from './pages/ManageWorkers/ManageWorker'
import AssignWorks from './pages/AssignWorks/AssignWorks'
import MapComponent from './pages/Map/MapComponent'
import GenerateReport from './pages/GenerateReport/GenerateReport'
import {ShiftLogs} from "./pages/shiftLogs/shiftLogs"
import { Alerts } from './pages/alerts/alerts'
import ShiftPlanning from './pages/ShiftPlanning/ShiftPlanning'
import { SensorData } from './pages/sensorsData/sensorData'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/login',
      index: true,
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/manage-worker',
      element: <ManageWorker />
    },
    {
      path: '/assign-works',
      element: <AssignWorks />
    },
    {
      path: '/map',
      element: <MapComponent />
    },
    {
      path: '/generate-report',
      element: <GenerateReport />
    },
    {
      path: '/alerts',
      element: <Alerts />
    },
    {
      path: '/shift-planning',
      element: <ShiftPlanning />
    },
    {
      path: '/shiftlogs',
      element: <ShiftLogs/>
    },
    {
      path: '/sensordata',
      element: <SensorData/>
    }
  ]);

  return (
    <div className='min-h-screen w-full'>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
