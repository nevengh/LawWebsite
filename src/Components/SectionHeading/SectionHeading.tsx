import React from 'react';
import './SectionHeading.css';
import translation, { Language, TranslationStrings } from '../../Db/translation';

interface SectionHeadingProps {
  subhead: keyof TranslationStrings;
  mainhead: keyof TranslationStrings;
  language: Language;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subhead, mainhead, language }) => {
  return (
    <div className='SectionHeading'>
      <div className="team_heading">
        <div className="subhead">
          <div className="right_line"></div>
          <h5>{translation[language][subhead]}</h5>
          <div className="left_line"></div>
        </div>
        <div className="main_title">
          <h1>{translation[language][mainhead]}</h1>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
