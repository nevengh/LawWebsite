import './AboutPage.css';
import { motion } from 'framer-motion';
import translation, { Language } from '../../Db/translation';
import { Link } from 'react-router-dom';
import about_img from '../../assets/images/about_img.jpg';
import about_services from '../../assets/images/about_services.jpg';
import our_partner from '../../assets/images/our_partners.jpg';

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
            {translation[language].about_hero} / <Link to='/'>{translation[language].home}</Link>
          </motion.h1>
        </div>
      </div>

      {/* About Paragraph */}
      <motion.div 
        className="about_paragrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text_about">
          <h1>{translation[language].about_title}</h1>
          <p>{translation[language].text_about}</p>
        </div>
        <img src={about_img} alt="About Us" />
      </motion.div>

      {/* About Services Section */}
      <motion.div 
        className="about_services_section"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        <motion.div 
          className="about_services_text"
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
        >
          <h1>{translation[language].about_services_title}</h1>
          <p>{translation[language].about_services}</p>
        </motion.div>
        
        <motion.img 
          src={about_services} 
          alt="About Services"
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
        />
      </motion.div>

      {/* Our Partner Section */}
      <motion.div 
        className="our_partner"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        <motion.div 
          className="our_partner_text"
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
        >
          <h1>{translation[language].our_partner_title}</h1>
          <p>{translation[language].our_partner}</p>
        </motion.div>
        
        <motion.img 
          src={our_partner} 
          alt="Our Partner"
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
        />
      </motion.div>

      {/* Way That We Work Section */}
      <div className="our_work">
        <h1>{translation[language].our_work_title}</h1>
        <div className="our_work_con">
          {[
            {
              title: translation[language].quality_title,
              text: translation[language].quality_text,
            },
            {
              title: translation[language].work_knowledg_title,
              text: translation[language].work_knowledg_text,
            },
            {
              title: translation[language].important_advice_title,
              text: translation[language].important_advice_text,
            },
            {
              title: translation[language].capicity_title,
              text: translation[language].capicity_text,
            },
          ].map((work, index) => (
            <motion.div
              key={index}
              className="our_work_card"
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
              whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the animation
            >
              <h2>{work.title}</h2>
              <p>{work.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
