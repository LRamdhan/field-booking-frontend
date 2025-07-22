import "./css/global.css"
import { StyleProvider } from '@ant-design/cssinjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage';
import DasboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from "./components/templates/ProtectedRoute";
import OauthErrorPage from "./pages/OauthErrorPage";
import { ConfigProvider } from 'antd';
import Layout from "./components/templates/Layout";
import FieldPage from "./pages/FieldPage";
import DetailFieldPage from "./pages/DetailFieldPage";
import BookingPage from "./pages/BookingPage";
import UserBookingPage from "./pages/UserBookingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import locale from 'antd/locale/id_ID';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import LandingPage from "./pages/LandingPage";
import PaymentPage from "./pages/PaymentPage";
import BookingQrPage from "./pages/BookingQrPage";
import BookingDetailPage from "./pages/BookingDetailPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordRequestPage from "./pages/ResetPasswordRequestPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

dayjs.locale('id');

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <ProtectedRoute><DasboardPage /></ProtectedRoute>
      },
      {
        path: '/booking',
        element: <ProtectedRoute><UserBookingPage /></ProtectedRoute>,
        children: [
          {
            path: '/booking/:id',
            element: <ProtectedRoute><BookingDetailPage /></ProtectedRoute>
          },
          {
            path: '/booking/:id/bayar',
            element: <ProtectedRoute><PaymentPage /></ProtectedRoute>
          },
          {
            path: '/booking/:id/qr-code',
            element: <ProtectedRoute><BookingQrPage /></ProtectedRoute>
          }
        ]
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
        path: "/profile",
        // element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
        element: <ProfilePage />
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
  {
    path: "/reset-password-request",
    element: <ResetPasswordRequestPage />
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />
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
      <ConfigProvider theme={theme} locale={locale}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />   
      </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  </>
  )
}

export default App
