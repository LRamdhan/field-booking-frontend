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
import DetailFieldPage from "./pages/DetailFieldPage";
import BookingPage from "./pages/BookingPage";
import UserBookingPage from "./pages/UserBookingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><DasboardPage /></ProtectedRoute>
      },
      {
        path: "/lapang",
        element: <FieldPage />
      },
      {
        path: "/lapang/:id",
        element: <DetailFieldPage />,
        children: [
          {
            path: '/lapang/:id/booking',
            element: <BookingPage />
          }
        ]
      },
      {
        path: '/booking',
        element: <ProtectedRoute><UserBookingPage /></ProtectedRoute>
      }
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

const queryClient = new QueryClient()

function App() {
  return (<>
    <StyleProvider layer>
      <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />   
      </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  </>
  )
}

export default App
