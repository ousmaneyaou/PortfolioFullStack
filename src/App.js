import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projet from "./components/Projet";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projet />
    </div>
  );
}

export default App;
