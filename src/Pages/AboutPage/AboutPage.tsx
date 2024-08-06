import './AboutPage.css'
import { motion } from 'framer-motion';
import translation, { Language } from '../../Db/translation';
import { Link } from 'react-router-dom';
interface AboutPageProps {
    language: Language;
  }
  
const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  return (
    <div className='AboutPage'>
        <div className="Sections_Hero">
        <div className="hero_text">
        <motion.h1 
          className='hero_title'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translation[language].about_hero}/<Link to='/'>{translation[language].home}</Link>
        </motion.h1>
        </div>
        </div>
    </div>
  )
}

export default AboutPage