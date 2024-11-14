import useAppNavigation from "../../hooks/useAppNavigation";
import styles from "./Header.module.scss";

const Header = () => {
  const { navigateHome } = useAppNavigation();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.title} title="Back to home" onClick={navigateHome}>
        Todo List
      </div>
      <div className={styles.icon}>
        <img
          src="/react-todolist/images/calendar.svg"
          alt="calendar icon"
          width={100}
          height={100}
        />
      </div>
    </header>
  );
};

export default Header;
