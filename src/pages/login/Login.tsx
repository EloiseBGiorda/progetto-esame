import { useEffect } from "react";
import "firebaseui/dist/firebaseui.css";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import * as firebaseui from "firebaseui";

const Login = () => {
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
      signInSuccessUrl: "/dashboard",
      signInFlow: "popup",
    });
  }, []);

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <form>
          <div className="bg-white w-96 p-6 rounded shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://www.svgrepo.com/show/18425/tv.svg"
                alt="logo"
                className="h-32"
              ></img>
            </div>
            <div id="firebaseui-auth-container"></div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
