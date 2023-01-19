import { useParams, useNavigate } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import { getShowById, ShowDetailType } from "../../Api";
import {
  addToFavourites,
  removeFromFavourites,
  addToWatching,
  removeFromWatching,
} from "../../firebase/firebasedb";
import { UserContext } from "../login/AuthContext";
import { FavouriteHeart, NotFavouriteHeart } from "../../shared/favouriteIcons";
import useIsFavourite from "../../hooks/checkFavouriteHook";
import useIsWatching from "../../hooks/checkNowWatching";
import { Link } from "react-router-dom";
import { Navbar } from "../../shared/navbar";
import { searchMovieBool } from "../../Api";
import { title } from "process";

const DetailPage = () => {
  const { showId } = useParams();
  const [show, setShow] = useState<ShowDetailType | null>();

  const { currentUser, logOut } = UserContext();

  useEffect(() => {
    if (!!showId) {
      try {
        const showIdNum = parseInt(showId);
        getShowById(showIdNum).then((res) => setShow(res));
      } catch (err) {
        console.error("NaN");
      }
    }
  }, [showId]);

  return (
    <>
      <Navbar isUserLogged={true}></Navbar>
      <div className="flex items-center" id="showDetail">
        <div className="max-w-sm bg-white rounded-lg shadow-md">
          <div>
            <img className="rounded-t-lg" src={show?.image} alt={show?.title} />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {show?.title}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700">{show?.summary}</p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white centerItem">
              <div className="px-2 pt-4 pb-2 h-16 inline-block">
                {show?.genres.map((genre) => (
                  <span
                    key={genre}
                    className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 "
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-sm  ">
              <p className="text-gray-900 leading-none centerItem">
                Rating: {show?.avgRating}
              </p>
              <p className="text-gray-600 centerItem">
                Premiere: {show?.startDate} {show?.endDate ? "-" : ""}
                {show?.endDate}
              </p>
            </div>
            <div className=" centerItem">
              {show ? <ShowDetailActions show={show} /> : <p></p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ShowDetailActions = ({ show }: { show: ShowDetailType }) => {
  const { currentUser } = UserContext();
  const isFavourite = useIsFavourite(show.id);
  const isWatching = useIsWatching(show.id);
  const showBool: searchMovieBool = {
    favourite: isFavourite,
    id: show.id,
    title: show.title,
    genres: show.genres,
    image: show.image,
    summary: show.summary,
  };

  return (
    <div className="flex items-center gap-5 mb-2">
      {isFavourite ? (
        <button
          className="btn btn-circle text-accent"
          onClick={() => removeFromFavourites(showBool, currentUser)}
        >
          <FavouriteHeart />
        </button>
      ) : (
        <button
          className="btn btn-circle text-accent"
          onClick={() => addToFavourites(showBool, currentUser)}
        >
          <NotFavouriteHeart />
        </button>
      )}
      {!isWatching ? (
        <div className="tooltip" data-tip="Add to watching">
          <button
            className="btn btn-circle"
            onClick={() => addToWatching(showBool, currentUser)}
          >
            +
          </button>
        </div>
      ) : (
        <div className="tooltip" data-tip="Remove from watching">
          <button
            className="btn btn-circle text-success"
            onClick={() => removeFromWatching(currentUser)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
