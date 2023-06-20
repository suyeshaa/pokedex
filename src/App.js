import "./App.css";
import { Details } from "./components/Details";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/pokemonDetails/:pokemonName" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
