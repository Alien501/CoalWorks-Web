import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import FormBuilder from './components/custom/FormBuilder/FormBuilder'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Home</h1>
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
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
