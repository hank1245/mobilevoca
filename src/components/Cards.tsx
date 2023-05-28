import { useState } from "react";
import Card, { Word } from "./Card";

interface Props {}

const Cards = ({ data }: { data: Word[] }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {data.map((word, idx) => (
        <Card data={word} key={idx} />
      ))}
    </div>
  );
};

export default Cards;
