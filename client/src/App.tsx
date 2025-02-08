import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <div className="page-content">
        <HomePage />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
