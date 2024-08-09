import { Link } from 'react-router-dom';
import translation, { Language, TranslationStrings } from '../../Db/translation'
import './OurTeam.css'
import { motion } from 'framer-motion';


// Import images
import firstUser from "../../assets/images/Ahmad.webp";
import secondUser from "../../assets/images/Mosa.webp";
import thirdUser from "../../assets/images/Qamar.webp";
import fourthUser from '../../assets/images/Mike.webp'
import TeamCard from '../../Components/TeamCard/TeamCard';
import fiveUser from '../../assets/images/Naji.jpg'
interface OurTeamProps {
  language: Language;
}
const OurTeam : React.FC<OurTeamProps> = ({ language }) =>{
  const imageMap: { [key: string]: string } = {
    "Ahmad.jpg": firstUser,
    "Mosa.jpg": secondUser,
    "Qamar.jpg": thirdUser,
    "Mike.jpg":fourthUser,
    "Naji.jpg":fiveUser,
  };
  return (
    <div className='OurTeam'>
      <div className="Sections_Hero">
        <div className="hero_text">
          <motion.h1 
            className='hero_title'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {translation[language].our_team_mainhead} / <Link to='/'>{translation[language].home}</Link>
          </motion.h1>
        </div>
      </div>
      <div className="Our_team_Head main_container">
        <h1>{translation[language].our_team_mainhead}</h1>
        <div className="Our_team_Head_text">
          <h4>
            {translation[language].Our_team_Head_text_1}
            <br/>
            {translation[language].Our_team_Head_text_2}
          </h4>
          <p>
            {translation[language].Our_team_Head_text_3}
          </p>
        </div>
      </div>
      <div className="team_card_container main_container">
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
            {
              id: 4,
              teamName: 'team_4_name',
              info: 'team_4_info',
              image: 'Mike.jpg',
            },
            {
              id: 5,
              teamName: 'team_5_name',
              info: 'team_5_info',
              image: 'Naji.jpg',
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
          {/* <Link to='all-team' className="show_all">عرض الكل </Link> */}
        </div>
    </div>
  )
}

export default OurTeam