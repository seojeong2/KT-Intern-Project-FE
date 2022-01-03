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
import Retry from "./pages/Retry";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Route exact={true} path="/retry" element={<Retry />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
