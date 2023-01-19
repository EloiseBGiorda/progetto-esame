import { useCallback, useEffect, useState } from "react";
import { getShowsBySearch, ShowType } from "../../Api";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../login/AuthContext";
import { Navbar } from "../../shared/navbar";
const SearchPage = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [shows, setShows] = useState<ShowType[]>([]);
  const [search, setSearch] = useSearchParams();

  const isSearchButtonDisabled = () =>
    search.get("search")?.trim().length === 0;

  const handleOnSearch = () => {
    getShowsBySearch(search?.get("search") || "").then((res: any) =>
      setShows(res)
    );
  };

  useEffect(() => {
    handleOnSearch();
  }, [search]);

  return (
    <>
      <Navbar isUserLogged={true}></Navbar>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
      >
        <div className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full md:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Show name"
              onChange={(e: any) => setCurrentSearch(e.target.value)}
              autoFocus
              id="simple-search"
              style={{ color: "black" }}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
            />
          </div>
          <button
            disabled={isSearchButtonDisabled()}
            onClick={() => setSearch({ search: currentSearch })}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shows.map((el) => (
            <Link to={el.id.toString()} key={el.id}>
              <div className="my-8 rounded  duration-300 hover:-translate-y-1">
                <figure>
                  <img
                    src={el.image}
                    alt={el.title}
                    className="rounded-t h-72 w-full object-cover"
                  />
                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800">
                      {el.title}
                    </p>
                    <small className="leading-5 text-gray-500  overflow-hidden h-16 inline-block">
                      {el.summary}
                    </small>
                    <div className="px-2 pt-4 pb-2 h-16 inline-block">
                      {el.genres.map((genre) => (
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
      </form>
    </>
  );
};

export default SearchPage;
