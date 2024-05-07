import { useContext } from "react";
import { AuthContext } from "../../userContext/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <div>loading.....</div>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivetRoute;
