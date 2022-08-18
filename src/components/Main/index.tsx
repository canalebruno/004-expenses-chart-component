import Chart from "../Chart";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <main className={styles.container}>
      <h1>Spending - Last 7 days</h1>
      <Chart />
      <div className={styles.details}>
        <div className={styles.total}>
          <p>Total this month</p>
          <span>$478.33</span>
        </div>
        <div className={styles.percentage}>
          <span>+2.4%</span>
          <p>from last month</p>
        </div>
      </div>
    </main>
  );
}
