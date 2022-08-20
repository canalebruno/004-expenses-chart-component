import ChartBar from "./ChartBar";
import styles from "./styles.module.scss";
import data from "../../../public/data.json";
import { useEffect, useState } from "react";

type data = {
  percentage: number;
  price: number;
};

export default function Chart() {
  const [monData, setMonData] = useState({} as data);
  const [tueData, setTueData] = useState({} as data);
  const [wedData, setWedData] = useState({} as data);
  const [thuData, setThuData] = useState({} as data);
  const [friData, setFriData] = useState({} as data);
  const [satData, setSatData] = useState({} as data);
  const [sunData, setSunData] = useState({} as data);

  useEffect(() => {
    const sortedData = data.sort((a, b) => {
      return b.amount - a.amount;
    });

    const percentages = sortedData.map((record) => {
      if (record.day === sortedData[0].day) {
        return {
          ...record,
          percentage: 100,
        };
      } else {
        return {
          ...record,
          percentage: (record.amount / sortedData[0].amount) * 100,
        };
      }
    });

    percentages.map((record) => {
      switch (record.day) {
        case "mon":
          setMonData({ percentage: record.percentage, price: record.amount });
          break;
        case "tue":
          setTueData({ percentage: record.percentage, price: record.amount });
          break;
        case "wed":
          setWedData({ percentage: record.percentage, price: record.amount });
          break;
        case "thu":
          setThuData({ percentage: record.percentage, price: record.amount });
          break;
        case "fri":
          setFriData({ percentage: record.percentage, price: record.amount });
          break;
        case "sat":
          setSatData({ percentage: record.percentage, price: record.amount });
          break;
        case "sun":
          setSunData({ percentage: record.percentage, price: record.amount });
          break;
      }
    });
  }, []);

  const today = new Date().getDay();

  return (
    <div className={styles.container}>
      <ChartBar weekday={today === 1} data={monData} label="mon" />
      <ChartBar weekday={today === 2} data={tueData} label="tue" />
      <ChartBar weekday={today === 3} data={wedData} label="wed" />
      <ChartBar weekday={today === 4} data={thuData} label="thu" />
      <ChartBar weekday={today === 5} data={friData} label="fri" />
      <ChartBar weekday={today === 6} data={satData} label="sat" />
      <ChartBar weekday={today === 7} data={sunData} label="sun" />
    </div>
  );
}
