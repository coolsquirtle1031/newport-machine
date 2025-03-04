import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ArchivePage from "./pages/ArchivePage";
import PlaygroundPage from "./pages/PlaygroundPage";
import AddMemoPage from "./pages/AddMemoPage";
import ViewMemoPage from "./pages/ViewMemoPage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/add" element={<AddMemoPage />} />
            <Route path="/view/:id" element={<ViewMemoPage />} />
          </Routes>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
