import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/home"} element={<Home/>} />
        <Route path={""} element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
