import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormDetails from "./components/FormDetails";
import Cardss from "./components/Cardss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cardss />} />
          <Route path="/formDetails" element={<FormDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
