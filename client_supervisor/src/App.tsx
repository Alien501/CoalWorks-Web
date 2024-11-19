import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/custom/Layout';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Scheduler from './pages/Scheduler';
import Observations from './pages/Observations';
import Archives from './pages/Archives';
import Templates from './pages/Templates';
import ShiftHandover from './pages/ShiftHandover';
import RoundPlans from './pages/RoundPlans';
import PdfGenerator from './pages/PdfGenerator';
import { Toaster } from 'sonner';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'home',
          element: <Dashboard />,
        },
        {
          path: 'reports',
          element: <Reports />,
        },
        {
          path: 'rounds',
          element: <RoundPlans />,
        },
        {
          path: 'scheduler',
          element: <Scheduler />,
        },
        {
          path: 'observations',
          element: <Observations />,
        },
        {
          path: 'archives',
          element: <Archives />,
        },
        {
          path: 'templates',
          element: <Templates />,
        },
        {
          path: 'shift-handover',
          element: <ShiftHandover />,
        },
        {
          path: 'pdf-generator',
          element: <PdfGenerator />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
