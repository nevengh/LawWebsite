import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
// import OurTeam from './Pages/OurTeam/OurTeam';
import { Language } from './Db/translation';
import AboutPage from './Pages/AboutPage/AboutPage';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.body.dir = direction; // Set the direction of the body
    document.body.className = language === 'en' ? 'en' : 'ar'; // Set class for language
  }, [direction, language]);

  return (
    <div className={`app ${direction}`}>
      <BrowserRouter basename='/LawWebsite/'>
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          {/* <Route path="/team-work" element={<OurTeam language={language} />} /> */}
          <Route path="/about-page" element={<AboutPage language={language} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
