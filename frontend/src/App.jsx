import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "C:/Users/HP/OneDrive/Desktop/MovieRecs/frontend/src/pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "C:/Users/HP/OneDrive/Desktop/MovieRecs/frontend/src/contexts/MovieContext.jsx";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
