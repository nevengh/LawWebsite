// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import OurTeam from './Pages/OurTeam/OurTeam';
import { Language } from './Db/translation';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  return (
    <div className={`app ${direction}`}>
      <BrowserRouter>
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/team-work" element={<OurTeam language={language} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
