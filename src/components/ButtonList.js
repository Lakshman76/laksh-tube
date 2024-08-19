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
    "java",
    "lofi song",
    "Discipline",
    "Motivation",
    "gym",
  ];
  return (
    <div className="flex w-[95vw] overflow-x-scroll ">
      {btnList.map((list) => (
        <Button name={list} key={list} />
      ))}
    </div>
  );
};

export default ButtonList;
