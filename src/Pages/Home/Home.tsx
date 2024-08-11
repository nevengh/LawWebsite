import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import About from "../About/About";
import { Link } from "react-router-dom";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import translation, { Language } from "../../Db/translation";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import TeamSection from "../../Components/TeamSectio/TeamSection";


interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {

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
        why you choose us
        ========================
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
        <TeamSection language={language} />
        <Link to='all-team' className="show_all">{translation[language].showAll}</Link>
      </div>

      {/*
      =========================
        Our Services
        =========================
      */}
      <ServicesSection language={language} />
    </div>
  );
};

export default Home;
