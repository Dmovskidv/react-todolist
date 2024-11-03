import useFetchTasks from "../hooks/useFetchTasks";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: JSX.Element }) => {
  useFetchTasks();
  const { pathname } = useLocation();
  return (
    <div className={styles.mainContainer}>
      <Header />
      <main className={styles.content}>{children}</main>
      {!pathname?.includes("manage") && <Footer />}
    </div>
  );
};

export default Layout;
