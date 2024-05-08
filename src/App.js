import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/index";
import GetProjects from "./components/HomePage/GetProjects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/GetProjects" element={<GetProjects/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
