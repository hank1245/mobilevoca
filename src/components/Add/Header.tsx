import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Props {
  onSave: () => void;
}

const Header = ({ onSave }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button
          className="btn btn-ghost btn-circle text-white"
          onClick={goBack}
        >
          <IoIosArrowBack size={36} />
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-2xl">새 단어</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle text-secondary text-xl mr-2"
          onClick={onSave}
          type="submit"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default Header;
