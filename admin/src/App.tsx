import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Home</h1>
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
