import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Lunch } from './pages/Lunch';
import { Diner } from './pages/Diner';
import { Wijnen } from './pages/Wijnen';
import { Sfeer } from './pages/Sfeer';
import { Groepen } from './pages/Groepen';
import { Contact } from './pages/Contact';
import { Reserveren } from './pages/Reserveren';
import { Evenementen } from './pages/Evenementen';
import { Popup } from './components/Popup';
import { CookieBanner } from './components/Widgets';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="font-sans text-diodona-green bg-diodona-beige overflow-x-hidden selection:bg-diodona-green selection:text-white">
          <Popup />
          <CookieBanner />
          {/* LanguageWidget removed in favor of Header selector */}
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/diner" element={<Diner />} />
            <Route path="/wijnen" element={<Wijnen />} />
            <Route path="/sfeer" element={<Sfeer />} />
            <Route path="/groepen" element={<Groepen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserveren" element={<Reserveren />} />
            <Route path="/evenementen" element={<Evenementen />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;