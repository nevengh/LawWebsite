import React from 'react'
import { Link } from 'react-router-dom';
import translation, { Language, TranslationStrings } from '../../Db/translation'
import { motion } from 'framer-motion';
import { teamWork, TeamWorkMembers } from '../../Db/teamWork';
import TeamCard from '../../Components/TeamCard/TeamCard';
import './AllTeamMembers.css'

// Import images
import firstUser from "../../assets/images/Ahmad.webp";
import secondUser from "../../assets/images/Mosa.webp";
import thirdUser from "../../assets/images/Qamar.webp";
import fourthUser from '../../assets/images/Mike.webp'
import fiveUser from '../../assets/images/Naji.jpg'



const imageMap: { [key: string]: string } = {
    "Ahmad.jpg": firstUser,
    "Mosa.jpg": secondUser,
    "Qamar.jpg": thirdUser,
    "Mike.jpg": fourthUser,
    "Naji.jpg": fiveUser,
};

interface AllTeamMembersProps {
    language: Language;
}

const AllTeamMembers: React.FC<AllTeamMembersProps> = ({ language }) => {
    return (
        <div>
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
            <div className="Our_team_Head  main_container ">
                <h1>{translation[language].our_team_mainhead}</h1>
                <div className="Our_team_Head_text">
                    <h4>
                        {translation[language].Our_team_Head_text_1}
                        <br />
                        {translation[language].Our_team_Head_text_2}
                    </h4>
                    <p>
                        {translation[language].Our_team_Head_text_3}
                    </p>
                </div>
            </div>
            <div className=" team_card_container main_container ">

                {
                    teamWork.map((TeamMember: TeamWorkMembers) => (
                        <motion.div
                            key={TeamMember.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className='MarginTop'
                        >
                            <TeamCard
                                key={TeamMember.id}
                                id={TeamMember.id}
                                img={imageMap[TeamMember.image]}
                                teamName={TeamMember.teamName as keyof TranslationStrings}
                                info={TeamMember.info as keyof TranslationStrings}
                                phone={TeamMember.phone as keyof TranslationStrings}
                                language={language}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllTeamMembers