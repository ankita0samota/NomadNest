import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Hotels from "./pages/Hotels";
import MapPage from "./pages/Map";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import HotelDetails from "./pages/HotelDetails";
import ExploreDetails from "./pages/ExploreDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/attractions/:id" element={<ExploreDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
