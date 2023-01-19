import { switchTheme } from "../redux/theme/theme.slice";
import { useDispatch } from "react-redux";
import { LightTheme } from "./themeIcons";
import { DarkTheme } from "./themeIcons";
import { Link } from "react-router-dom";
import { UserContext } from "../pages/login/AuthContext";

export const Navbar = (isUserLogged: any) => {
  const { currentUser, logOut } = UserContext();
  const dispatch = useDispatch();

  return (
    <nav className="px-2 sm:px-4 pt-2.5 pb-5 rounded m-0">
      <div
        id="navBar"
        className="container flex flex-wrap items-center justify-between mx-auto"
      >
        <div className="flex items-center">
          <Link to={"/movies"}>
            <h1 className="flex items-center justify-center text-1xl font-extrabold text-black-900  md:text-2xl lg:text-3xl">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                TV
              </span>
              db
            </h1>
          </Link>
        </div>

        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex p-4 mt-1  rounded-lg sm:flex-row md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            {isUserLogged.isUserLogged ? (
              <li>
                <Link to={"/movies"}>
                  <p
                    className="block py-2 pl-3 pr-4  rounded md:bg-transparent   h-full "
                    aria-current="page"
                  >
                    Home
                  </p>
                </Link>
              </li>
            ) : null}
            {isUserLogged.isUserLogged ? (
              <li>
                <Link to={"/favourites"}>
                  <p
                    className="block py-2 pl-3 pr-4  rounded md:bg-transparent   h-full "
                    aria-current="page"
                  >
                    Favourites
                  </p>
                </Link>
              </li>
            ) : null}
            {isUserLogged.isUserLogged ? (
              <li>
                <button
                  className="block py-2 pl-3 pr-4  rounded md:bg-transparent   h-full "
                  aria-current="page"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </li>
            ) : null}
            <li>
              <button
                className="themeButton h-3"
                onClick={() => dispatch(switchTheme())}
              >
                <div className="sun">
                  <LightTheme></LightTheme>
                </div>
                <div className="moon">
                  <DarkTheme></DarkTheme>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
