import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Computer programming",
    "Live",
    "Body building",
    "Thoughts",
    "News",
    "Recently uploaded",
    "Meditation music",
    "Sales",
    "Stock market",
    "Statitics",
    "Politics",
    "valentine",
  ];
  return (
    <div className="flex w-[90vw] overflow-x-scroll ">
      {btnList.map((list) => (
        <Button name={list} key={list} />
      ))}
    </div>
  );
};

export default ButtonList;
