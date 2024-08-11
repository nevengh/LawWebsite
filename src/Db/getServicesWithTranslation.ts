import { Translation } from './translation';
import { legalServices } from './LegalServices'

const getTranslatedServiceName = (serviceName: string, translation: Translation, language: 'en' | 'ar') => {
    return translation[language][serviceName];
};


export const getServiceDetails = (id: number, translation: Translation, language: 'en' | 'ar') => {
    const service = legalServices.find(service => service.id === id);
    
    if (!service) {
        return null; 
    }

    return {
        ...service,
        serviceName: getTranslatedServiceName(service.serviceName, translation, language),
        firstDescription: translation[language][service.firstDescription],
        contents: service.contents.map(content => ({
            ...content,
            description: translation[language][content.description],
        })),
    };
};
