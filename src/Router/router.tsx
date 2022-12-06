import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Protected from "../pages/login/Protected";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
