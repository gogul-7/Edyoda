import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="homePage">
        <Home />
      </div>
    </div>
  );
}

export default App;
