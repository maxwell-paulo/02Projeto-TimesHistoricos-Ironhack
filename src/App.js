import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddCromo } from "./pages/AddCromo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cromo" element={<AddCromo />} />
        {/* <Route path="/edit/:id" element={<EditPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
