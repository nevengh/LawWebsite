import { Link } from "react-router-dom";
import TopBanner from "../TopBanner/TopBanner";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="Header">
            <TopBanner />
            <div className="navbar main_container">
                <div className="logo">المحامي</div>
                <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/">الرئيسية</Link>
                    <Link to="/">من نحن</Link>
                    <Link to="/">الخدمات</Link>
                    <Link to="/">فريقنا</Link>
                    <Link to="/">اتصل بنا</Link>
                </div>
                <div className="call_us">
                    <Link to=''>اتصل بنا</Link>
                </div>
                <div className="burger_menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    );
}

export default Header;
