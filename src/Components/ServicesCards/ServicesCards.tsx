import React from 'react'
import { motion } from "framer-motion";
import ServiceCard from '../ServiceCard/ServiceCard'
import { Language, TranslationStrings } from '../../Db/translation'
import { LegalService, legalServices } from '../../Db/LegalServices'

interface ServicesCardsProps {
    language: Language;
}

const ServicesCards: React.FC<ServicesCardsProps> = ({ language }) => {
    return (
        <div className='Service_card_container'>
            {
                legalServices.slice(0, 3).map((serviceItem: LegalService) => (
                    <motion.div
                        key={serviceItem.id}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
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
    )
}

export default ServicesCards
