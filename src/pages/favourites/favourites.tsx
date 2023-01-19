import { Link } from "react-router-dom";
import useFavouriteShows from "../../hooks/favouritesListHook";
import { Navbar } from "../../shared/navbar";
import { UserContext } from "../login/AuthContext";
import { useEffect } from "react";
import { ShowDetailType, getShowById } from "../../Api";

const FavouritesPage = () => {
  const { currentUser } = UserContext();
  const favouriteShows = useFavouriteShows(currentUser?.uid);

  return (
    <>
      <Navbar isUserLogged={true}></Navbar>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favouriteShows &&
          Object.keys(favouriteShows).map((key, index) => (
            <Link to={`/movies/${favouriteShows[key].id}`} key={index}>
              <div className="my-8 rounded  duration-300 hover:-translate-y-1">
                <figure>
                  <img
                    src={favouriteShows[key].image}
                    alt={favouriteShows[key].title}
                    className="rounded-t h-72 w-full object-cover"
                  />
                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800">
                      {favouriteShows[key].title}
                    </p>
                    <small className="leading-5 text-gray-500  overflow-hidden h-16 inline-block">
                      {favouriteShows[key].summary}
                    </small>
                    <div className="px-2 pt-4 pb-2 h-16 inline-block">
                      {favouriteShows[key].genres &&
                        favouriteShows[key].genres.map((genre) => (
                          <span
                            key={genre}
                            className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "
                          >
                            {genre}
                          </span>
                        ))}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default FavouritesPage;
