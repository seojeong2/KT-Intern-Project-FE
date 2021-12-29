import "./App.css";
import Main from "./pages/Main";
import Start from "./pages/Start";
import GameSelect from "./pages/GameSelect";
import { Routes, Route } from "react-router-dom";
import MugungwhaIntro from "./pages/MugungwhaIntro";
import DalgonaIntro from "./pages/DalgonaIntro";
import RspIntro from "./pages/RspIntro";
import DalgonaGame from "./pages/DalgonaGame";
import MugungwhaGame from "./pages/MugungwhaGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/" element={<Main />} />
        <Route exact={true} path="/start" element={<Start />} />
        <Route exact={true} path="/select" element={<GameSelect />} />
        <Route
          exact={true}
          path="/mugungwhaintro"
          element={<MugungwhaIntro />}
        />
        <Route exact={true} path="/dalgonaintro" element={<DalgonaIntro />} />
        <Route exact={true} path="/rspintro" element={<RspIntro />} />
        <Route exact={true} path="/dalgonagame" element={<DalgonaGame />} />
        <Route exact={true} path="/mugungwhagame" element={<MugungwhaGame />} />
      </Routes>
    </div>
  );
}

export default App;
