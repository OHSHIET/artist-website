import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import NoPage from "./pages/NoPage";
import Navbar from './pages/Navbar';

const mainPath = "/artist-website";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist-website/page1" element={<FirstPage />} />
        <Route path="/artist-website/page2" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
