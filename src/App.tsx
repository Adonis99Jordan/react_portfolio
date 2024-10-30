// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
    return (
        <div className="bg-secondary text-white d-flex flex-column min-vh-100">
            <Header />
            <main className="containe flex-grow-1">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;