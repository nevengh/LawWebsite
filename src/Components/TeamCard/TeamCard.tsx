import React from 'react';
import './TeamCard.css';
import translation, { Language, TranslationStrings } from '../../Db/translation';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface TeamCardProps {
  id :number;
  img: string;                   // URL of the image
  teamName: keyof TranslationStrings; // Key for the translated name
  info: keyof TranslationStrings;     // Key for the translated info
  language: Language;
  phone: keyof TranslationStrings;            // Language prop to select the correct translation
}

const TeamCard: React.FC<TeamCardProps> = ({ id , img, teamName, info, language ,phone }) => {
  return (
    <div className="TeamCard">
      <img src={img} alt={translation[language][teamName]} />
      <h2 className="name">{translation[language][teamName]}</h2>
      <h4 className="name_info">{translation[language][info]}</h4>
      <p> <span>{translation[language][phone]}</span><FaWhatsapp/></p>

      <Link to={`/all-team/${id}`} className='HJ_ReadMore'><span>{translation[language].ShowTeamMember}...</span></Link> 

    </div>
  );
}

export default TeamCard;
