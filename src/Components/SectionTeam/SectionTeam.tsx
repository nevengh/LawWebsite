import React from 'react'
import  { Language } from '../../Db/translation';
import SectionHeading from '../SectionHeading/SectionHeading';
import TeamCards from '../TeamCards/TeamCards';


interface SectionTeamProps {
    language: Language;
}

const SectionTeam: React.FC<SectionTeamProps> = ({ language }) => {
    return (
        <div className='SectionTeam'>
            <SectionHeading
                subhead="our_team_subhead"
                mainhead="our_team_mainhead"
                language={language}
            />
            <TeamCards language={language}/>
        </div>
    )
}

export default SectionTeam