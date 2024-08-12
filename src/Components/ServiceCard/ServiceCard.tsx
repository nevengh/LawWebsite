import './ServiceCard.css'
import translation, { Language, TranslationStrings } from '../../Db/translation';
import { Link } from 'react-router-dom';


interface ServiceCardProps {
    id:number,
    serviceName: keyof TranslationStrings; // Key for the translated name
    serviceDescription: keyof TranslationStrings; // Key for the translated name
    language: Language;
}


const ServiceCard: React.FC<ServiceCardProps> = ({id , serviceName, serviceDescription, language }) => {
    return (
        <div className='ServiceCard'>
            <h2 className="Service_name">{translation[language][serviceName]}</h2>
            <p className='Service_description'>{translation[language][serviceDescription]}</p>

            <Link to={`/all-legalServices/${id}`} className='HJ_ReadMore'><span>{translation[language].readMore}...</span></Link> 
        </div>
    )
}

export default ServiceCard