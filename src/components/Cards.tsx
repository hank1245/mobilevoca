import Card, { Word } from "./Card";

const Cards = ({ data }: { data: Word[] }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-5 pb-10">
      {data.map((word, idx) => (
        <Card data={word} key={idx} />
      ))}
    </div>
  );
};

export default Cards;
