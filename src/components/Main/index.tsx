import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Main() {
  const [currentPageWithBleedWidth, setCurrentPageWithBleedWidth] = useState(1);
  const [currentPageWithBleedHeight, setCurrentPageWithBleedHeight] =
    useState(1);
  const [currentPageFinishSizeWidth, setCurrentPageFinishSizeWidth] =
    useState(1);
  const [currentPageFinishSizeHeight, setCurrentPageFinishSizeHeight] =
    useState(1);
  const [newPageFinishSizeWidth, setNewPageFinishSizeWidth] = useState(1);
  const [newPageFinishSizeHeight, setNewPageFinishSizeHeight] = useState(1);
  const [rescaleToWidth, setRescaleToWidth] = useState(1);
  const [rescaleToHeight, setRescaleToHeight] = useState(1);
  const [trimboxSizeWidth, setTrimboxSizeWidth] = useState(1);
  const [trimboxSizeHeight, setTrimboxSizeHeight] = useState(1);

  const standardSizes = [
    {
      name: "A0",
      width: 841,
      height: 1189,
    },
    {
      name: "A1",
      width: 594,
      height: 841,
    },
    {
      name: "A2",
      width: 420,
      height: 594,
    },
    {
      name: "A3",
      width: 297,
      height: 420,
    },
    {
      name: "A4",
      width: 210,
      height: 297,
    },
    {
      name: "A5",
      width: 148,
      height: 210,
    },
    {
      name: "A6",
      width: 105,
      height: 148,
    },
    {
      name: "A7",
      width: 74,
      height: 105,
    },
  ];

  useEffect(() => {
    setRescaleToWidth(
      (currentPageWithBleedWidth * newPageFinishSizeWidth) /
        currentPageFinishSizeWidth
    );
    setRescaleToHeight(
      (currentPageWithBleedHeight * newPageFinishSizeHeight) /
        currentPageFinishSizeHeight
    );
    setTrimboxSizeWidth((rescaleToWidth - newPageFinishSizeWidth) / 2);
    setTrimboxSizeHeight((rescaleToHeight - newPageFinishSizeHeight) / 2);
  }, [
    currentPageWithBleedWidth,
    currentPageWithBleedHeight,
    currentPageFinishSizeWidth,
    currentPageFinishSizeHeight,
    newPageFinishSizeWidth,
    newPageFinishSizeHeight,
    rescaleToWidth,
    rescaleToHeight,
  ]);

  function handleSelect(selectOption: string, optionValue: string) {
    if (optionValue === "custom") {
      return;
    }

    const selectedPaper = standardSizes.find(
      (paper) => paper.name === optionValue
    );

    if (!selectedPaper) {
      return;
    }
    if (selectOption === "currentPage") {
      setCurrentPageFinishSizeWidth(selectedPaper.width);
      setCurrentPageFinishSizeHeight(selectedPaper.height);
    } else if (selectOption === "newPage") {
      setNewPageFinishSizeWidth(selectedPaper.width);
      setNewPageFinishSizeHeight(selectedPaper.height);
    }
  }

  return (
    <main className={styles.container}>
      <h1>Rescaling with Bleed</h1>
      <label>
        <span>Current Page with Bleed</span>
        <input
          type="number"
          value={currentPageWithBleedWidth}
          onChange={(e) => setCurrentPageWithBleedWidth(Number(e.target.value))}
        />
        <input
          type="number"
          value={currentPageWithBleedHeight}
          onChange={(e) =>
            setCurrentPageWithBleedHeight(Number(e.target.value))
          }
        />
      </label>
      <label>
        <span>Current Page Finish Size</span>
        <select
          onChange={(event) => handleSelect("currentPage", event.target.value)}
        >
          <option value="custom">Custom</option>
          {standardSizes.map((paper) => {
            return (
              <option key={paper.name} value={paper.name}>
                {paper.name}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          value={currentPageFinishSizeWidth}
          onChange={(e) =>
            setCurrentPageFinishSizeWidth(Number(e.target.value))
          }
        />
        <input
          type="number"
          value={currentPageFinishSizeHeight}
          onChange={(e) =>
            setCurrentPageFinishSizeHeight(Number(e.target.value))
          }
        />
      </label>
      <label>
        <span>New Finish Size</span>
        <select
          onChange={(event) => handleSelect("newPage", event.target.value)}
        >
          <option value="custom">Custom</option>
          {standardSizes.map((paper) => {
            return (
              <option key={paper.name} value={paper.name}>
                {paper.name}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          value={newPageFinishSizeWidth}
          onChange={(e) => setNewPageFinishSizeWidth(Number(e.target.value))}
        />
        <input
          type="number"
          value={newPageFinishSizeHeight}
          onChange={(e) => setNewPageFinishSizeHeight(Number(e.target.value))}
        />
      </label>
      <label>
        <span>Rescale to</span>
        <input value={rescaleToWidth} disabled />
        <input value={rescaleToHeight} disabled />
      </label>
      <label>
        <span>Trimbox Sizes</span>
        <input value={trimboxSizeWidth} disabled />
        <input value={trimboxSizeHeight} disabled />
      </label>
    </main>
  );
}
