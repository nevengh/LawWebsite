import { motion } from 'framer-motion';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='Hero'>
        <div className="overlay"></div>
        <div className="hero_text">
            <motion.h1 
                className='hero_title'
                initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and translate up
                animate={{ opacity: 1, y: 0 }} // Fade in and translate to original position
                transition={{ duration: 0.5 }} // Transition duration
            >
                محامون واستشياريون قانونيون
            </motion.h1>
            <div className="contact_call">
                <Link to=''>اتصل بنا</Link>
            </div>
        </div>
    </div>
  );
}

export default Hero;
