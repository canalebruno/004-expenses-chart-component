import styles from "./styles.module.scss";

interface PriceTag {
  price: number;
}

export default function PriceTag({ price }: PriceTag) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  return <div className={styles.container}>{formatCurrency(price)}</div>;
}
