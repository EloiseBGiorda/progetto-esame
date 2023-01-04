import "./App.css";
import { AuthProvider } from "./pages/login/AuthContext";
import Router from "./Router/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { switchTheme } from "./redux/theme/theme.slice";

const App = () => {
  const theme = useSelector((state: RootState) => {
    return state.theme.darkMode;
  });

  const dispatch = useDispatch();
  return (
    <>
      <AuthProvider>
        <div className={`${theme ? "dark-theme" : "light-theme"}`}>
          <button
            className="themeButton"
            onClick={() => dispatch(switchTheme())}
          >
            switch theme
          </button>
          <Router></Router>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
