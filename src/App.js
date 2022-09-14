import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddCromo } from "./pages/AddCromo";
import { InfoCromo } from "./pages/InfoCromo";
import { EditPage } from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cromo" element={<AddCromo />} />
        <Route path="/info-cromo/:id" element={<InfoCromo />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
