import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import { Language } from './Db/translation';
import AboutPage from './Pages/AboutPage/AboutPage';
import Footer from './Components/Footer/Footer';
import AllLegalServices from './Pages/AllLegalServices/AllLegalServices';
import OpenLegalService from './Pages/OpenLegalService/OpenLegalService';
import ContactUS from './Pages/ContactUS/ContactUS';
import OpenAllTeamMembers from './Pages/OpenAllTeamMembers/OpenAllTeamMembers';
import AllTeamMembers from './Pages/AllTeamMembers/AllTeamMembers';


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
          <Route path="/about-page" element={<AboutPage language={language} />} />
          <Route path='/all-legalServices'>
            <Route index element={<AllLegalServices language={language} />} />
            <Route path=":id" element={<OpenLegalService language={language} />} />
          </Route>
          <Route path='/all-team'>
            <Route index element={<AllTeamMembers language={language}/>} />
            <Route path=":id" element={<OpenAllTeamMembers language={language} />} />
          </Route>

          <Route path='/conatct-us' element={<ContactUS language={language}/>} />
        </Routes>
        <Footer language={language} />
      </BrowserRouter>
    </div>
  );
};

export default App;
