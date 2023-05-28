import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { HOST } from "../../constants";

function Add() {
  const [input, setInput] = useState({
    en: "",
    kr: "",
  });
  const [toast, setToast] = useState(false);
  const onEn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, en: e.target.value });
  };

  const onKr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, kr: e.target.value });
  };
  const onSave = async () => {
    if (input.en.length > 0 && input.kr.length > 1) {
      await axios.post(`${HOST}/word`, input);
      setInput({ en: "", kr: "" });
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  };

  return (
    <div>
      <Header onSave={onSave} />
      <div className="p-10 mt-5">
        <div className="text-2xl">단어</div>
        <input
          type="text"
          placeholder="단어 입력"
          className="input input-bordered input-primary w-full max-w-sm mb-8 mt-4"
          value={input.en}
          onChange={onEn}
        />
        <div className="text-2xl">의미</div>
        <input
          type="text"
          placeholder="의미 입력"
          className="input input-bordered input-primary w-full max-w-sm mt-4"
          value={input.kr}
          onChange={onKr}
        />
      </div>
      {toast && (
        <div className="toast">
          <div className="alert alert-warning text-white">
            <div>
              <span>단어가 저장되었습니다.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Add;
