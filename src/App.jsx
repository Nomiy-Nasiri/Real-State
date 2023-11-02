import Header from "./components/Header/Header";
import Hero from "./components/HearoSection/Hero";
import Companies from "./components/companies/Companies";
import "./App.css";
import Resdensices from "./components/Resdensices/resdensices";
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
    </div>
  );
}

export default App;
