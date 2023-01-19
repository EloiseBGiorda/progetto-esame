import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";
import Protected from "../pages/login/Protected";
import Movies from "../pages/movies/movies";
import DetailPage from "../pages/movieDetail/DetailPage";
import FavouritesPage from "../pages/favourites/favourites";

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
      path: "/movies",

      element: (
        <Protected>
          <Movies />
        </Protected>
      ),
    },
    {
      path: "/movies/:showId",
      element: (
        <Protected>
          <DetailPage />
        </Protected>
      ),
    },
    {
      path: "/favourites",
      element: (
        <Protected>
          <FavouritesPage />
        </Protected>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
