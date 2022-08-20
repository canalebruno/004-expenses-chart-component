import { useState } from "react";
import PriceTag from "../PriceTag";
import styles from "./styles.module.scss";

interface ChartBarProps {
  label: string;
  data: {
    percentage: number;
    price: number;
  };
  weekday?: boolean;
}

export default function ChartBar({
  label,
  data,
  weekday = false,
}: ChartBarProps) {
  const [isHover, setIsHover] = useState(false);
  const { percentage, price } = data;

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{ height: `${percentage}%` }}
          className={`${styles.bar} ${weekday && styles.active}`}
        >
          {isHover && <PriceTag price={price} />}
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}
