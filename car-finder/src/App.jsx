import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CarDetails from "./pages/CarDetails";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/car/:carName" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;