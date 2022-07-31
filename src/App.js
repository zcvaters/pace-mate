import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TimeDuration from "./features/pace-calculator/components/TimeDuration";

function App() {
  return <div className="App">
    <TimeDuration />
  </div>;
}

export default App;
