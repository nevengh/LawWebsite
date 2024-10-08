import React from 'react'
import './OpenLegalService.css'
import translation, { Language } from '../../Db/translation';
import {  useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceDetails } from '../../Db/getServicesWithTranslation';
import SectionTeam from '../../Components/SectionTeam/SectionTeam';





interface OpenLegalServiceProps {
    language: Language;
}

const OpenLegalService: React.FC<OpenLegalServiceProps> = ({ language }) => {


    const { id } = useParams<{ id: string }>();
    const serviceDetails = getServiceDetails(Number(id), translation, language);

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
                        {serviceDetails?.serviceName}
                    </motion.h1>
                </div>
            </div>

            <div className='HJ_ServiceDetails'>
                <h2>{serviceDetails?.serviceName} :</h2>
                <p>- {serviceDetails?.firstDescription}</p>
                {serviceDetails?.contents.map((content, index) => (
                    <div key={index}>
                        <p>- {content.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <SectionTeam language={language} />
            </div>


        </>
    )
}

export default OpenLegalService


