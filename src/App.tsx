import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/about" element={<About />} errorElement={<Error />} />
            <Route path="/services" element={<Services />} errorElement={<Error />} />
            <Route path="/gallery" element={<Gallery />} errorElement={<Error />} />
            <Route path="/contact" element={<Contact />} errorElement={<Error />} />
            <Route path="/reviews" element={<Reviews />} errorElement={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;