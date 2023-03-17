import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage";
import Landing from "./pages/landing";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
