import { useState } from "react";
import Card from "./Card";

interface Props {}

const Cards = () => {
  const words = [
    { en: "advent", kr: "출현" },
    { en: "transmit", kr: "전달하다" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {words.map((word, idx) => (
        <Card data={word} key={idx} />
      ))}
    </div>
  );
};

export default Cards;
