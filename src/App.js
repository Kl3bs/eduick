import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      {/* <h1>Salve</h1>

      <p className="paragraph"> {paragraph.length > 10 ? "Maior" : "Menor"}</p>

      <img src={img} alt="placeholder"></img> */}
    </div>
  );
}

export default App;
