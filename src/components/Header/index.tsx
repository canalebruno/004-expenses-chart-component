import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.myBalance}>
        <span>My balance</span>
        <span className={styles.balanceValue}>$921.48</span>
      </div>
      <img src="logo.svg" alt="Logo" />
    </header>
  );
}
