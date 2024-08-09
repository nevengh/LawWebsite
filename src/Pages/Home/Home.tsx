import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import About from "../About/About";
import { Link } from "react-router-dom";
import TeamCard from "../../Components/TeamCard/TeamCard";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import translation, {
  Language,
  TranslationStrings,
} from "../../Db/translation";

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
  const map ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0609464668028!2d55.36490247494584!3d25.302156327442166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c785ad1227b%3A0x4b873618560e813d!2sQamar%20Al%20Kassadi%20Advocates%20%26%20Legal%20Consultants!5e0!3m2!1sen!2s!4v1723213060571!5m2!1sen!2s"
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
              <Link to="/conatct-us">اتصل بنا</Link>
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
        <div className="our_value_con">
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
        className="bgblue"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="our_value_card">
          <p>{work.text}</p>
        </div>
      </motion.div>
    ))}
  </div>
      </div>

      

      {/*
      =========================
       Our Values
       =========================
       */}
      <div className="our_values">
  <SectionHeading
    subhead="why_choose_subhead"
    mainhead="our_value_mainhead"
    language={language}
  />
  <div className="our_value_con">
    {[
      {
        title: translation[language].value_excelence_title_1,
        text: translation[language].value_excelence_text_1,
      },
      {
        title: translation[language].value_transparency_title,
        text: translation[language].value_transparency_text,
      },
      {
        title: translation[language].value_Honesty_title,
        text: translation[language].value_Honesty_text,
      },
      {
        title: translation[language].justic_title,
        text: translation[language].justic_text,
      },
    ].map((value, index) => (
      <motion.div
        key={index}
        className="bgblue"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="our_value_card">
          <h1>{value.title}</h1>
          <p>{value.text}</p>
        </div>
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
              teamName: "team_1_name", // These should be keys in the translation file
              info: "team_1_info",
              image: "Ahmad.jpg",
              phone: "team_1_phone",
            },
            {
              id: 2,
              teamName: "team_2_name",
              info: "team_2_info",
              image: "Mosa.jpg",
              phone: "team_2_phone",
            },
            {
              id: 3,
              teamName: "team_3_name",
              info: "team_3_info",
              image: "Qamar.jpg",
              phone: "team_3_phone",
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
        <Link to="all-team" className="show_all">
          عرض الكل{" "}
        </Link>
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

      {/*
      =========================
       Contact Us
       =========================
       */}
       <div className="contact_us_home">
       <SectionHeading
          subhead="conatct_us_subhead"
          mainhead="conatct_us_mainhead"
          language={language}
        />
          <div className="contact_us_home_con ">
          <div className="conatct_us_info ">
            <h1 className="conatct_us_info_title">{translation[language].conatct_us_info_title}</h1>
            <div className="contact_phone">
              <h4 className="phone_title">
                {translation[language].phone_title}
              </h4>
              <p className='phone_number'>
                <a href="tel:0586689000" style={{color:'#223343'}}>058 668 9000</a> | 
                <a href="tel:0553122302" style={{color:'#223343'}}> 055 312 2302</a> | 
                <a href="tel:0553633377" style={{color:'#223343'}}> 05 536 3377</a>
              </p>
            </div>
            <div className="conatct_email">
              <h4 className="phone_title">{translation[language].email_title}</h4>
              <p style={{color:'#223343'}}>alkassadi.advocates@gmail.com</p>
            </div>
            <div className="work_time">
              <h4 className="work_time_title">P.O.BOX</h4>
              <p style={{color:'#223343'}}>70607</p>
            </div>
          </div>
          <div className="contact_us_map">
          <div className="map-container">
          <div
            className="elementor-element elementor-element-9e5d0bf e-con-full e-flex e-con e-child"
            data-id="9e5d0bf"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-3e5ee4b elementor-widget elementor-widget-text-editor"
              data-id="3e5ee4b"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
              <iframe
              src={map}
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
              </div>
            </div>
          </div>
        </div>
          </div>
          </div>

       </div>
    </div>
  );
};

export default Home;
