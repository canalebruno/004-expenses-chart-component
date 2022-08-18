import ChartBar from "./ChartBar";
import styles from "./styles.module.scss";
import data from "../../../public/data.json";
import { useEffect, useState } from "react";

export default function Chart() {
  const [monPercent, setMonPercent] = useState(1);
  const [tuePercent, setTuePercent] = useState(1);
  const [wedPercent, setWedPercent] = useState(1);
  const [thuPercent, setThuPercent] = useState(1);
  const [friPercent, setFriPercent] = useState(1);
  const [satPercent, setSatPercent] = useState(1);
  const [sunPercent, setSunPercent] = useState(1);

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
          setMonPercent(record.percentage);
          break;
        case "tue":
          setTuePercent(record.percentage);
          break;
        case "wed":
          setWedPercent(record.percentage);
          break;
        case "thu":
          setThuPercent(record.percentage);
          break;
        case "fri":
          setFriPercent(record.percentage);
          break;
        case "sat":
          setSatPercent(record.percentage);
          break;
        case "sun":
          setSunPercent(record.percentage);
          break;
      }
    });
  }, []);

  const today = new Date().getDay();

  return (
    <div className={styles.container}>
      <ChartBar weekday={today === 1} percentage={monPercent} label="mon" />
      <ChartBar weekday={today === 2} percentage={tuePercent} label="tue" />
      <ChartBar weekday={today === 3} percentage={wedPercent} label="wed" />
      <ChartBar weekday={today === 4} percentage={thuPercent} label="thu" />
      <ChartBar weekday={today === 5} percentage={friPercent} label="fri" />
      <ChartBar weekday={today === 6} percentage={satPercent} label="sat" />
      <ChartBar weekday={today === 7} percentage={sunPercent} label="sun" />
    </div>
  );
}
