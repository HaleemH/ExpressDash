import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import NavBar from "./components/NavBar"
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
