import Header from "./components/Header/Header";
import Hero from "./components/HearoSection/Hero";
import Companies from "./components/companies/Companies";
import "./App.css";
import Resdensices from "./components/Resdensices/resdensices";
import Value from "./components/Value/value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Resdensices/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
