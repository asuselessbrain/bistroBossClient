import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProiver";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation()

  if (loader) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;
