import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Or your preferred auth provider
import useAppStore from "../store/useAppStore";
import Loader from "../components/Loader/Loader";

export const AuthHOC = ({ children }: { children: JSX.Element }) => {
  const auth = getAuth();
  const { setAccount } = useAppStore();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setAccount({
          email: userInfo.email,
          displayName: userInfo.displayName,
        });
      } else {
        setAccount(null);
      }
      setCheckingAuth(false);
    });
    return unsubscribe;
  }, [auth, setAccount]);

  if (checkingAuth) return <Loader />;

  return <>{children}</>;
};

export default AuthHOC;
