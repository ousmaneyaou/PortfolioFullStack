import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
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
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
