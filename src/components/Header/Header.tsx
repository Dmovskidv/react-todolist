import clsx from "clsx";
import useAppNavigation from "../../hooks/useAppNavigation";
import { FirebaseAuthManager } from "../../services/firebase";
import styles from "./Header.module.scss";

const Header = () => {
  const { navigateHome } = useAppNavigation();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.title} title="Back to home" onClick={navigateHome}>
        Todo List
      </div>
      <div className={styles.icon}>
        <img src="/react-todolist/images/calendar.svg" alt="calendar icon" />
      </div>
      <div
        className={clsx(styles.icon, styles.logout)}
        onClick={FirebaseAuthManager.signOut}
        title="Logout"
      >
        <img src="/react-todolist/images/logout.svg" alt="logout icon" />
      </div>
    </header>
  );
};

export default Header;
