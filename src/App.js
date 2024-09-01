import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageGrid />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
