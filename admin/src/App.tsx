import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

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
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
