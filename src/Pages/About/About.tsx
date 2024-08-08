import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import translation, { Language } from '../../Db/translation';
import { Link } from 'react-router-dom';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <div className='About'>
        <div className="header_section">
            <h1>{translation[language].about_title}</h1>
        </div>
        <motion.div 
            className="about_content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <p>{translation[language].about_content_1}</p>
            <p className='second_text'>{translation[language].about_content_2}....<Link to='/about-page'>{translation[language].read_more}</Link></p>
        </motion.div>
    </div>
  );
}

export default About;
