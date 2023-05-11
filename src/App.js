import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import NoPage from "./pages/NoPage";
import NavbarHeader from './pages/NavbarHeader';
import About from './pages/About';
import globalvars from './globalvars';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={globalvars.addToMainPath('about')} element={<About />} />
        <Route path={globalvars.addToMainPath('page1')} element={<FirstPage />} />
        <Route path={globalvars.addToMainPath('page2')} element={<SecondPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
