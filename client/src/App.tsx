import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ArchivePage from "./pages/ArchivePage";
import PlaygroundPage from "./pages/PlaygroundPage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
          </Routes>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
