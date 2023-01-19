import { useEffect } from "react";
import "firebaseui/dist/firebaseui.css";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import * as firebaseui from "firebaseui";
import { switchTheme } from "../../redux/theme/theme.slice";
import { useDispatch } from "react-redux";
import { LightTheme } from "../../shared/themeIcons";
import { DarkTheme } from "../../shared/themeIcons";
import { Navbar } from "../../shared/navbar";
const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //firebaseui
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          //sign in with Google
          provider: GoogleAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
        {
          //sign in with email ad password
          provider: EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
      signInSuccessUrl: "/movies",
      signInFlow: "popup",
    });
  }, []);

  return (
    <>
      <Navbar isUserLogged={false}></Navbar>
      <main className="flex items-center justify-center pt-32">
        <form>
          <div className="w-96 p-6">
            <h3 className="flex items-center justify-center text-1xl md:text-2xl lg:text-3xl font-bold ">
              Log-in
            </h3>

            <div id="firebaseui-auth-container"></div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
