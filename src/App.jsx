import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage";
import Favourites from "./pages/favourites";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
