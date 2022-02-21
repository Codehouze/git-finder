import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
