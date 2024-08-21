import { useLocation, Navigate, Outlet } from "react-router-dom";
import { userSelecter } from "../store/features/auth/authSlice";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
  const user = useSelector(userSelecter);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
