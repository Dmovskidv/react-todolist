import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.headerContainer}>
      <div
        className={styles.title}
        title="Back to home"
        onClick={() => navigate("/")}
      >
        Todo List
      </div>
      <div className={styles.icon}>
        <img
          src="./images/calendar.svg"
          alt="calendar icon"
          width={100}
          height={100}
        />
      </div>
    </header>
  );
};

export default Header;
