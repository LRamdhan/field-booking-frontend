import { StyleProvider } from '@ant-design/cssinjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage';
import "./css/global.css"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
])

function App() {
  return (<>
    <StyleProvider layer>
      <RouterProvider router={router} />   
    </StyleProvider>
  </>
  )
}

export default App
