import "./css/global.css"
import { StyleProvider } from '@ant-design/cssinjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage';
import DasboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from "./pages/ProtectedRoute";
import OauthErrorPage from "./pages/OauthErrorPage";
import { ConfigProvider } from 'antd';
import Layout from "./pages/Layout";
import FieldPage from "./pages/FieldPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><DasboardPage /></ProtectedRoute>
      },
      // {
      //   path: "/lapang",
      //   element: <ProtectedRoute><FieldPage /></ProtectedRoute>
      // },
      {
        path: "/lapang",
        element: <FieldPage />
      },
    ]
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

const theme = {
  token: {
    colorPrimary: '#FF6F00',
  }
}

function App() {
  return (<>
    <StyleProvider layer>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />   
      </ConfigProvider>
    </StyleProvider>
  </>
  )
}

export default App
