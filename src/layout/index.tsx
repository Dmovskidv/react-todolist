import useFetchTasks from "../hooks/useFetchTasks";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: JSX.Element }) => {
  useFetchTasks();
  const { pathname } = useLocation();
  const isFooterVisible = !(
    pathname?.includes("manage") || pathname?.includes("login")
  );
  const isHeaderVisible = !pathname?.includes("login");

  return (
    <div className={styles.mainContainer}>
      {isHeaderVisible && <Header />}
      <main className={styles.content}>{children}</main>
      {isFooterVisible && <Footer />}
    </div>
  );
};

export default Layout;
