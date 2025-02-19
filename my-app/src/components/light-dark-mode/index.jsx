import useLocalStorage from "./useLocalStorage";
import "./style.css";

export default function Mode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="mode-container" data-theme={theme}>
      <p>Hello World!</p>
      <button className="mode-button" onClick={handleToggleMode}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
