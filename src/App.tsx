import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoffeePage from './pages/CoffeePage';
import TeaPage from './pages/TeaPage';
import SpicesPage from './pages/SpicesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coffee" element={<CoffeePage />} />
            <Route path="/tea" element={<TeaPage />} />
            <Route path="/spices" element={<SpicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;