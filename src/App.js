import { Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/add-item' element={<AddItem />} /> */}
        {/* <Route path="/edit/:id" element={<EditPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
