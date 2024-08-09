import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import About from "../About/About";
import { Link } from "react-router-dom";
import TeamCard from "../../Components/TeamCard/TeamCard";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import translation, { Language, TranslationStrings } from "../../Db/translation";

// Import images
import firstUser from "../../assets/images/Ahmad.webp";
import secondUser from "../../assets/images/Mosa.webp";
import thirdUser from "../../assets/images/Qamar.webp";

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {

  const imageMap: { [key: string]: string } = {
    "Ahmad.jpg": firstUser,
    "Mosa.jpg": secondUser,
    "Qamar.jpg": thirdUser,
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
        className="legal_advice"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="advice_content">
          <div className="center_content_advice">
            <h1>تحتاج الي أستشارة قانونية؟ تواصل معنا الأن</h1>
            <div className="contact_call">
              <Link to="">اتصل بنا</Link>
            </div>
          </div>
        </div>
      </motion.div>
      {/*
      =========================
       whu you choose us
       =========================
       */}
      <div className="why_choose_us">
        <SectionHeading
          subhead="why_choose_subhead"
          mainhead="why_choose_mainhead"
          language={language}
        />
        <div className="our_work_con">
          {[
            {
              
              text: translation[language].why_choose_text_1,
            },
            {
              
              text: translation[language].why_choose_text_2,
            },
            {
              
              text: translation[language].why_choose_text_3,
            },
            
          ].map((work, index) => (
            <motion.div
              key={index}
              className="our_work_card"
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
              whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the animation
            >
              <p>{work.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/*
      =========================
       Our Team section
       =========================
       */}
      <div className="team_section">
      <SectionHeading
          subhead="our_team_subhead"
          mainhead="our_team_mainhead"
          language={language}
        />
        <div className="team_card_container ">
          {[
            {
              id: 1,
              teamName: 'team_1_name', // These should be keys in the translation file
              info: 'team_1_info',
              image: 'Ahmad.jpg',
              phone:'team_1_phone',
            },
            {
              id: 2,
              teamName: 'team_2_name',
              info: 'team_2_info',
              image: 'Mosa.jpg',
              phone:'team_2_phone',
            },
            {
              id: 3,
              teamName: 'team_3_name',
              info: 'team_3_info',
              image: 'Qamar.jpg',
              phone:'team_3_phone',
            },
          ].map((team) => (
            <motion.div
              key={team.id}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <TeamCard
                img={imageMap[team.image]}
                teamName={team.teamName as keyof TranslationStrings}
                info={team.info as keyof TranslationStrings}
                phone={team.phone as keyof TranslationStrings}
                language={language}
              />
            </motion.div>
          ))}
        </div>
          <Link to='all-team' className="show_all">عرض الكل </Link>
      </div>
      {/*
      =========================
       Our Services
       =========================
       */}
      <div className="services_section">
        <SectionHeading
          subhead="our_services_subhead"
          mainhead="our_services_mainhead"
          language={language}
        />
      </div>
    </div>
  );
};

export default Home;
