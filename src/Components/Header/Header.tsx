// src/Components/Header/Header.tsx
import { Link } from "react-router-dom";
import TopBanner from "../TopBanner/TopBanner";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/images/Al Kassadi.png'
import translation, { Language } from '../../Db/translation';
import { useState } from "react";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

function Header({ language, setLanguage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <>
      <TopBanner />
      <div className="navbar ">
        <div className="logo"><img src={logo} alt="Al Kassadi Logo" /></div>
        <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/">{translation[language].home}</Link>
          <Link to="/about-page">{translation[language].about}</Link>
          <Link to="/all-legalServices">{translation[language].services}</Link>
          <Link to="/team-work">{translation[language].team}</Link>
          <Link to="/contact">{translation[language].contact}</Link>
        <div className="language_btn">
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">en</option>
            <option value="ar">ar</option>
          </select>
        </div>
        </div>
        <div className="call_us">
          <Link to="/contact">{translation[language].contact}</Link>
        </div>
        <div className="burger_menu" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </>
  );
}

export default Header;
