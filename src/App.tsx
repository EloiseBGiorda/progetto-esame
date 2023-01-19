import "./App.css";
import { AuthProvider } from "./pages/login/AuthContext";
import Router from "./Router/router";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};

export default App;
