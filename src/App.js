import { Route, Routes, BrowserRouter } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Export from "./pages/Export";
import Home from "./pages/Home";
import LiveSurvey from "./pages/LiveSurvey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-survey" element={<LiveSurvey />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/export" element={<Export />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
