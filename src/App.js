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
import Register from "./pages/Register";
import DbdbdipIntro from "./pages/DbdbdipIntro";
import DbdbdipGame from "./pages/DbdbdipGame";
import Result from "./pages/Result";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route exact={true} path="/" element={<Main />} />
          <Route exact={true} path="/start" element={<Start />} />
          <Route exact={true} path="/select" element={<GameSelect />} />
          <Route
            exact={true}
            path="/mugungwhaintro"
            element={<MugungwhaIntro />}
          />
          <Route
            exact={true}
            path="/dbdbdipgame"
            element={<DbdbdipGame />}
          />
          <Route
            exact={true}
            path="/dbdbdipintro"
            element={<DbdbdipIntro />}
          />
          <Route exact={true} path="/dalgonaintro" element={<DalgonaIntro />} />
          <Route exact={true} path="/rspintro" element={<RspIntro />} />
          <Route exact={true} path="/dalgonagame" element={<DalgonaGame />} />
          <Route
            exact={true}
            path="/mugungwhagame"
            element={<MugungwhaGame />}
          />
          <Route exact={true} path="/retry" element={<Retry />} />
          <Route exact={true} path="/register" element={<Register />} />
          <Route exact={true} path="/result" element={<Result />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
