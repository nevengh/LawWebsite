import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import About from '../About/About';
import { Link, useNavigate } from 'react-router-dom';
import TeamCard from '../../Components/TeamCard/TeamCard';
import TeamInfo from '../../Db/TeamInfo.json';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import { Language } from '../../Db/translation';

// Import images
import firstUser from '../../assets/images/Hero.jpg';
import secondUser from '../../assets/images/wesley-tingey-9z9fxr_7Z-k-unsplash.jpg';
import thirdUser from '../../assets/images/Hero.jpg';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const navigate = useNavigate();
  // Create a mapping of image names to imported images
  const imageMap: { [key: string]: string } = {
    "Hero.jpg": firstUser,
    "Fie.jpg": secondUser,
    "Neven.jpg": thirdUser,
  };

  const handleTeamCardClick = (teamMember: { id: number; teamName: string; info: string; image: string; }) => {
    // Navigate to the 'team-work' route and pass the team member data as state
    navigate('/team-work', { state: teamMember });
  };

  return (
    <div>
      <Hero language={language} />
      <About language={language} />
      {/*
      ======================
      Legal Advice Section
      ======================
      */}
      <motion.div 
        className='legal_advice'
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="advice_content">
          <div className="center_content_advice">
            <h1>تحتاج الي أستشارة قانونية؟ تواصل معنا الأن</h1>
            <div className="contact_call">
              <Link to=''>اتصل بنا</Link>
            </div>
          </div>
        </div>
      </motion.div>
      {/*
      =========================
       Our Team section
       =========================
       */}
      <div className="team_section">
        <SectionHeading subhead="فريقنا" mainhead='افضل محامينا' language={language} />
        <div className="team_card_container main_container">
          {TeamInfo.map((team) => (
            <motion.div 
              key={team.id} 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <TeamCard
                img={imageMap[team.image]}
                teamName={team.teamName}
                info={team.info}
                onClick={() => handleTeamCardClick(team)}
                language={language}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/*
      =========================
       Our Services
       =========================
       */}
       <div className="services_section">
          <SectionHeading subhead='خدماتنا' mainhead='خدماتنا القانونية' language={language} />
       </div>
    </div>
  );
}

export default Home;
