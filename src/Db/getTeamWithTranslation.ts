import { teamWork } from './teamWork';
import { Translation } from './translation';

// Import images
import firstUser from "../assets/images/Ahmad.webp";
import secondUser from "../assets/images/Mosa.webp";
import thirdUser from "../assets/images//Qamar.webp";
import fourthUser from '../assets/images//Mike.webp'
import fiveUser from '../assets/images//Naji.jpg'



const imageMap: { [key: string]: string } = {
    "Ahmad.jpg": firstUser,
    "Mosa.jpg": secondUser,
    "Qamar.jpg": thirdUser,
    "Mike.jpg": fourthUser,
    "Naji.jpg": fiveUser,
};

const getTranslatedteamName = (teamName: string, translation: Translation, language: 'en' | 'ar') => {
    return translation[language][teamName];
};


export const getTeamMemberDetails = (id: number, translation: Translation, language: 'en' | 'ar') => {
    const teamMember = teamWork.find(teamMember => teamMember.id === id);
    
    if (!teamMember) {
        return null; 
    }

    return {
        ...teamMember,
        teamName: getTranslatedteamName(teamMember.teamName, translation, language),
        info: translation[language][teamMember.info],
        image: imageMap[teamMember.image],
        phone: translation[language][teamMember.phone],
    };
};
