import React from 'react'
import './OpenAllTeamMembers.css'
import translation, { Language } from '../../Db/translation';
import { useParams } from 'react-router-dom';
import { getTeamMemberDetails } from '../../Db/getTeamWithTranslation';
import { motion } from 'framer-motion';
import SectionTeam from '../../Components/SectionTeam/SectionTeam';


interface OpenAllTeamMembersProps {
    language: Language;
}


const OpenAllTeamMembers: React.FC<OpenAllTeamMembersProps> = ({ language }) => {

    const { id } = useParams<{ id: string }>();
    const TeamMemberDetails = getTeamMemberDetails(Number(id), translation, language);

    return (
        <>
            <div className="Sections_Hero">
                <div className="hero_text">
                    <motion.h1
                        className='hero_title'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {TeamMemberDetails?.teamName}
                    </motion.h1>
                </div>
            </div>
            <div className='HJ_teamMemberDetails HJ_ContainerTeamWorkMember'>
                <div className='imageTeamMember'>
                    <img src={TeamMemberDetails?.image} alt="Member Image" />
                </div>
                <div className='HJ_contentTeamWork'>
                    <h2>{TeamMemberDetails?.teamName} :</h2>
                    <p> {TeamMemberDetails?.info}</p>
                    <p >{TeamMemberDetails?.phone}</p>

                </div>
            </div>

            <div>
                <SectionTeam language={language} />
            </div>

        </>
    )
}

export default OpenAllTeamMembers