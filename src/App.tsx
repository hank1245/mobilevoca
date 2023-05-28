import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Plus from "./components/Plus";
import axios from "axios";
import { HOST } from "./constants";
import { Word } from "./components/Card";

export default function App() {
  const [data, setData] = useState<Word[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${HOST}/words`);
        console.log(data);
        setData(data);
      } catch (err) {
        setData([]);
      }
    };
    getData();
  }, []);
  return (
    <div className="w-full bg-netrual">
      <NavBar />
      {data.length > 0 && <Cards data={data} />}
      <Plus />
    </div>
  );
}
