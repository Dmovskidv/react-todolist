import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const account = useAuth();
  return account?.userLoggedIn ? (
    children
  ) : (
    <Navigate to="/react-todolist/login" />
  );
};

export default PrivateRoute;
