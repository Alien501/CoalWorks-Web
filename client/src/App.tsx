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

import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from 'react'
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
  const { theme, style } = buildTheme({
    themeName: "eggplant",
    themeColor: "#634433",
  });

//Add your Client ID here ⬇️
const clientId = "75273c02-6b44-4be7-8126-9cee0d1f2cc6";
const config = {
    composerPlaceholder: "What would you like to know?",
    botName: "MineGuard",
    botAvatar: builderHat,
    botDescription:
      "MineGuard is an advanced chatbot tailored for coal mine supervisors to streamline operations, monitor safety, and manage alerts efficiently.",
    email: {
      title: "randomEmail@boptress.com",
      link: "mailto:randomEmail@boptress.com",
    },
    phone: {
      title: "555-555-5555",
      link: "tel:555-555-5555",
    },
    website: {
      title: "https://botpress.com",
      link: "https://botpress.com",
    },
    termsOfService: {
      title: "Terms of service",
      link: "https://botpress.com/terms",
    },
    privacyPolicy: {
      title: "Privacy policy",
      link: "https://botpress.com/privacy",
    },
};

const Bot = () => {
  return(

  )
}

  return (
    <div className='min-h-screen w-full'>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
