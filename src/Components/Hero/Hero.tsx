import { motion } from 'framer-motion';
import './Hero.css';
import { Link } from 'react-router-dom';
import translation, { Language } from '../../Db/translation';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  console.log('Current language:', language);
  console.log('Translation object:', translation);
  console.log('Available languages:', Object.keys(translation));

  if (!translation[language]) {
    console.error(`Translation not found for language: ${language}`);
    return <div>Error: Translation not available for language: {language}</div>;
  }

  return (
    <div className='Hero'>
      <div className="overlay"></div>
      <div className="hero_text">
        <motion.h1 
          className='hero_title'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translation[language].hero_title}
        </motion.h1>
        <div className="contact_call">
          <Link to=''>{translation[language].contact_call}</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
