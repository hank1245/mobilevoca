import { useNavigate } from "react-router-dom";

const Plus = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/add");
  };

  return (
    <div
      className="w-20 bg-secondary h-20 fixed bottom-20 right-10 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <span className="text-7xl h-20 text-white">+</span>
    </div>
  );
};

export default Plus;
