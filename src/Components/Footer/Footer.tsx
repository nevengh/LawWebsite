import './Footer.css'
import logo from '../../assets/images/Al Kassadi.png'
import { Link } from 'react-router-dom'
import translation, { Language } from '../../Db/translation';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

interface FooterProps {
    language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    return (
        <div className='Footer'>
            <div className='HJ_ContainerFooter'>
                <div className='HJ_PartDetails'>
                    <div className="logo_Footer"><img src={logo} alt="Al Kassadi Logo" /></div>
                    <p className='HJ_parahraph'>{translation[language].paragraph_footer}</p>
                    
                    <div className='HJ_containerIcons'>
                        <div className="social_side">
                            <a href="#" className='Facebook Icon'>
                                <FaFacebook />
                            </a>
                            <a href="#" className='Instagram Icon'>
                                <FaInstagram />
                            </a>
                            <a href="#" className='Twitter Icon'>
                                <FaTwitter />
                            </a>
                            <a href="#" className='Youtube Icon'>
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='HJ_ContainerSectionFooter'>
                    <div className='HJ_PartTitles'>
                        <span className='HJ_MainTitle'>{translation[language].mainTitle1_footer}</span>
                        <div className='HJ_Links'>
                            <Link to='/'>
                                <span>{translation[language].titleLink1_footer} </span>
                            </Link>
                            <Link to='/about-page'>
                                <span>{translation[language].titleLink2_footer} </span>
                            </Link>
                            <Link to='/all-legalServices'>
                                <span> {translation[language].titleLink3_footer}</span>
                            </Link>
                            <Link to='/team-work'>
                                <span >{translation[language].titleLink4_footer} </span>
                            </Link>
                            <Link to='/contact'>
                                <span > {translation[language].titleLink5_footer} </span>
                            </Link>
                        </div>
                    </div>

                    <div className='HJ_PartServices'>
                        <span className='HJ_MainTitle'>{translation[language].mainTitle2_footer}</span>
                        <div className='HJ_AllServices'>
                            <span> {translation[language].service_1_name} </span>
                            <span> {translation[language].service_2_name} </span>
                            <span> {translation[language].service_3_name}</span>
                            <span>  {translation[language].service_4_name}</span>
                            <span>  {translation[language].service_5_name}</span>
                            <span>  {translation[language].service_6_name}</span>
                            <span>  {translation[language].service_7_name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
