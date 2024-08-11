import { Link } from 'react-router-dom';
import SectionHeading from '../SectionHeading/SectionHeading'
import ServicesCards from '../ServicesCards/ServicesCards';
import './ServicesSection.css'
import translation, { Language } from '../../Db/translation';


interface ServicesSectionProps {
    language: Language;
}
const ServicesSection: React.FC<ServicesSectionProps> = ({ language })=> {
    return (
        <div className='ServicesSection'>
            <SectionHeading
                subhead="our_services_subhead"
                mainhead="our_services_mainhead"
                language={language}
            />
            <ServicesCards language={language}/>
            <Link to='all-legalServices' className="show_all">{translation[language].showAll}</Link>
        </div>
    )
}

export default ServicesSection