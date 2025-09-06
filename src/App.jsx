import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import HistoryPage from "./pages/HistoryPage";
import PrescriptionsPage from "./pages/PrescriptionsPage";
import ReportsPage from "./pages/ReportsPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";

// A simple auth check function (replace with real logic)
const isAuthenticated = () => {
  // In a real app, you'd check for a valid JWT token
  return localStorage.getItem("token") !== null;
};

// A wrapper for protected routes
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "appointments",
        element: <AppointmentsPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "prescriptions",
        element: <PrescriptionsPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "notifications",
        element: <NotificationsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  // Redirect root to dashboard if authenticated, otherwise to login
  {
    path: "/",
    element: <Navigate to={isAuthenticated() ? "/dashboard" : "/login"} replace />,
  },
  // Fallback for any other path
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
