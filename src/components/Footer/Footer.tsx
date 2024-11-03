import clsx from "clsx";
import useAppStore from "../../store/useAppStore";
import styles from "./Footer.module.scss";

const Footer = () => {
  const setFilter = useAppStore((state) => state.setFilter);
  const filter = useAppStore((state) => state.filter);
  return (
    <footer className={styles.footerContainer}>
      <div
        className={clsx(styles.tab, { [styles.active]: filter === "all" })}
        onClick={() => setFilter("all")}
      >
        All
      </div>
      <div
        className={clsx(styles.tab, {
          [styles.active]: filter === "completed",
        })}
        onClick={() => setFilter("completed")}
      >
        Completed
      </div>
    </footer>
  );
};

export default Footer;
