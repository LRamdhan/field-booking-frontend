import "./css/global.css"
import { StyleProvider } from '@ant-design/cssinjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage';
import DasboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from "./pages/ProtectedRoute";
import OauthErrorPage from "./pages/OauthErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><DasboardPage /></ProtectedRoute>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/oauth-error",
    element: <OauthErrorPage />
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
