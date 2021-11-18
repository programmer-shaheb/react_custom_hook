import "./App.css";
import InputValueCopy from "./components/InputValueCopy";
import ScrollBottom from "./components/ScrollBottom";
import ToggleIcon from "./UI/ToggleIcon";
import useToggle from "./Utils/useToggle";

function App() {
  const [toggleTheme, changeTheme] = useToggle();

  return (
    <div className={!toggleTheme ? "Day" : "Night"}>
      <ToggleIcon toggleTheme={toggleTheme} onChange={changeTheme} />
      <InputValueCopy />
      <ScrollBottom />
    </div>
  );
}

export default App;
