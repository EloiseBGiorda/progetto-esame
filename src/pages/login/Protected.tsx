import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthProviderType, UserContext } from "./AuthContext";

const Protected = ({ children }: AuthProviderType) => {
  const { currentUser } = UserContext();
  if (currentUser === undefined) {
    <h1>Sorry, still loading...</h1>;
  } else if (currentUser === null) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default Protected;
