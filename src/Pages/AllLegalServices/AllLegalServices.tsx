import { Link } from 'react-router-dom';
import translation, { Language, TranslationStrings } from '../../Db/translation'
import './AllLegalServices.css'
import { motion } from 'framer-motion';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { LegalService, legalServices } from '../../Db/LegalServices';
import SeoComponnent from '../../Components/SeoComponnent/SeoComponnent';


interface AllLegalServicesProps {
    language: Language;
}

const AllLegalServices: React.FC<AllLegalServicesProps> = ({ language }) => {
    return (
        <div className='AllLegalServices'>
            <SeoComponnent
                title=" Al Kassadi LegalServices Page"
                description="A specialized page displaying all the services that can be provided by the company"
                type="website"
            />

            <div className="Sections_Hero">
                <div className="hero_text">
                    <motion.h1
                        className='hero_title'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {translation[language].allLegalServices_mainhead} / <Link to='/'>{translation[language].home}</Link>
                    </motion.h1>
                </div>
            </div>

            <div className="Service_card_container main_container ">

                {
                    legalServices.map((serviceItem: LegalService) => (
                        <motion.div
                            key={serviceItem.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className='MarginTop'
                        >
                            <ServiceCard
                                key={serviceItem.id}
                                id={serviceItem.id}
                                serviceName={serviceItem.serviceName as keyof TranslationStrings}
                                serviceDescription={serviceItem.firstDescription as keyof TranslationStrings}
                                language={language}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllLegalServices