import { Navigate } from "react-router-dom";
import useAppStore from "../store/useAppStore";

const PrivateRouteHOC = ({ children }: { children: JSX.Element }) => {
  const account = useAppStore((state) => state.account);

  return account ? children : <Navigate to="/react-todolist/login" />;
};

export default PrivateRouteHOC;
