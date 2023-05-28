import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Plus from "./components/Plus";

export default function App() {
  return (
    <div className="w-full h-full bg-netrual">
      <NavBar />
      <Cards />
      <Plus />
    </div>
  );
}
