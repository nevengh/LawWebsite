import React from 'react'
import { teamWork, TeamWorkMembers } from '../../Db/teamWork'
import { motion } from "framer-motion";
import TeamCard from '../TeamCard/TeamCard';
import { Language, TranslationStrings } from '../../Db/translation';

// Import images
import firstUser from "../../assets/images/Ahmad.webp"
import secondUser from "../../assets/images/Mosa.webp"
import thirdUser from "../../assets/images/Qamar.webp"


export const imageMap: { [key: string]: string } = {
    "Ahmad.jpg": firstUser,
    "Mosa.jpg": secondUser,
    "Qamar.jpg": thirdUser,
};

interface TeamCardsProps {
    language: Language;
}

const TeamCards : React.FC<TeamCardsProps> = ({ language }) => {
    return (
        <div className='team_card_container'>
            {
                teamWork.slice(0, 3).map((TeamMember: TeamWorkMembers) => (
                    <motion.div
                        key={TeamMember.id}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
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
    )
}

export default TeamCards