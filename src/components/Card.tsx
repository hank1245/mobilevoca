import { useState } from "react";

export interface Word {
  en: string;
  kr: string;
}

const Card = ({ data }: { data: Word }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="w-3/4 bg-slate-700 text-white px-8 py-8 text-2xl mt-10 flex justify-between rounded-2xl"
      onClick={() => setActive((prev) => !prev)}
    >
      <div>{data.en}</div>
      {active && <div>{data.kr}</div>}
    </div>
  );
};
export default Card;
