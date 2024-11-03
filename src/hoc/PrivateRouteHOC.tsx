import { Navigate } from "react-router-dom";
import useAppStore from "../store/useAppStore";

const PrivateRouteHOC = ({ children }: { children: JSX.Element }) => {
  const account = useAppStore((state) => state.account);

  console.log("account", account);

  return account ? children : <Navigate to="/login" />;
};

export default PrivateRouteHOC;
