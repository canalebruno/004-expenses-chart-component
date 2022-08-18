import { useState } from "react";
import PriceTag from "../PriceTag";
import styles from "./styles.module.scss";

interface ChartBarProps {
  label: string;
  percentage: number;
  weekday?: boolean;
}

export default function ChartBar({
  label,
  percentage,
  weekday = false,
}: ChartBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <div
          style={{ height: `${percentage}%` }}
          className={`${styles.bar} ${weekday && styles.active}`}
        >
          <PriceTag price={10} />
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}
