
import SectionHeading from '../SectionHeading/SectionHeading'
import { motion } from "framer-motion";
import TeamCard from "../../Components/TeamCard/TeamCard";
import { Language, TranslationStrings } from "../../Db/translation";

// Import images
import firstUser from "../../assets/images/Ahmad.webp";
import secondUser from "../../assets/images/Mosa.webp";
import thirdUser from "../../assets/images/Qamar.webp";

interface TeamSectionProps {
    language: Language;
}

const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {

    const imageMap: { [key: string]: string } = {
        "Ahmad.jpg": firstUser,
        "Mosa.jpg": secondUser,
        "Qamar.jpg": thirdUser,
    };
    
    return (
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
                        phone: 'team_1_phone',
                    },
                    {
                        id: 2,
                        teamName: 'team_2_name',
                        info: 'team_2_info',
                        image: 'Mosa.jpg',
                        phone: 'team_2_phone',
                    },
                    {
                        id: 3,
                        teamName: 'team_3_name',
                        info: 'team_3_info',
                        image: 'Qamar.jpg',
                        phone: 'team_3_phone',
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
            
        </div>
    )
}

export default TeamSection