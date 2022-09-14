import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddCromo } from "./pages/AddCromo";
import { InfoCromo } from "./pages/InfoCromo";
import { EditPage } from "./pages/EditPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cromo" element={<AddCromo />} />
        <Route path="/info-cromo/:id" element={<InfoCromo />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
