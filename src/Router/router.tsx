import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Protected from "../pages/login/Protected";
import Movies from "../pages/movies/movies";
import DetailPage from "../pages/movieDetail/DetailPage";

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
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/:showId",
      element: <DetailPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
