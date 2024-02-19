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
    "Stock market",
    "Statitics",
    "Politics",
    "valentine",
    "Stock market",
    "Statitics",
    "Politics",
    "valentine",    
  ];
  return (
    <div className="flex w-[90vw] overflow-x-scroll ">
      {btnList.map((list) => (
        <Button name={list} key={list}/>
      ))}
      {/* <Button name='All'/>
      <Button name='Music'/>
      <Button name='Computer programming'/>
      <Button name='Live'/>
      <Button name='Body building'/>
      <Button name='Thoughts'/>
      <Button name='News'/>
      <Button name='Recently uploaded'/>
      <Button name='Meditation music'/>
      <Button name='Sales'/>
      <Button name='Stock market'/>
      <Button name='Statitics'/>
      <Button name='Politics'/>
      <Button name='Mantras'/> */}
    </div>
  );
};

export default ButtonList;
