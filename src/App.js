import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
