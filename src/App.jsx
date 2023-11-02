import Header from "./components/Header/Header";
import Hero from "./components/HearoSection/Hero";
import Companies from "./components/companies/Companies";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
    </div>
  );
}

export default App;
