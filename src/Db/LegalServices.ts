
export interface Content {
    id: number;
    serviceid: number;
    description: string;
}


export interface LegalService {
    id: number;
    serviceName: string;
    firstDescription: string;
    contents: Content[];
}


export const legalServices : LegalService[] =[
    {
        id: 1,
        serviceName: 'service_1_name',
        firstDescription:'service_1_contentDescription1',
        contents: [
            {
                id: 1,
                serviceid: 1,
                description: 'service_1_contentDescription2',
            },
            {
                id: 2,
                serviceid: 1,
                description:'service_1_contentDescription3',
            },
            {
                id: 3,
                serviceid: 1,
                description: 'service_1_contentDescription4',
            },
        ],
    },
    {
        id: 2,
        serviceName: 'service_2_name',
        firstDescription:'service_2_contentDescription1',
        contents: [
            {
                id: 1,
                serviceid: 2,
                description: 'service_2_contentDescription2',
            },
            {
                id: 2,
                serviceid: 2,
                description:'service_2_contentDescription3',
            }
        ],
    },
    {
        id: 3,
        serviceName: 'service_3_name',
        firstDescription:'service_3_contentDescription1',
        contents: [
            {
                id: 1,
                serviceid: 3,
                description: 'service_3_contentDescription2',
            },
            {
                id: 2,
                serviceid: 3,
                description:'service_3_contentDescription3',
            },
            {
                id: 3,
                serviceid: 3,
                description:'service_3_contentDescription4',
            },
        ],
    },
    {
        id: 4,
        serviceName: 'service_4_name',
        firstDescription:'service_4_contentDescription2',
        contents: [
            {
                id: 1,
                serviceid: 4,
                description: 'service_4_contentDescription1',
            },
            {
                id: 2,
                serviceid: 4,
                description:'service_4_contentDescription3',
            }
        ],
    },
    {
        id: 5,
        serviceName: 'service_5_name',
        firstDescription:'service_5_contentDescription3',
        contents: [
            {
                id: 1,
                serviceid: 5,
                description: 'service_5_contentDescription2',
            },
            {
                id: 2,
                serviceid: 5,
                description:'service_5_contentDescription1',
            }
        ],
    },
    {
        id: 6,
        serviceName: 'service_6_name',
        firstDescription:'service_6_contentDescription2',
        contents: [
            {
                id: 1,
                serviceid: 6,
                description: 'service_6_contentDescription1',
            },
            {
                id: 2,
                serviceid: 6,
                description:'service_6_contentDescription3',
            },
            {
                id: 3,
                serviceid: 6,
                description:'service_6_contentDescription4',
            },
        ],
    },
    {
        id: 7,
        serviceName: 'service_7_name',
        firstDescription:'service_7_contentDescription5',
        contents: [
            {
                id: 1,
                serviceid: 7,
                description: 'service_7_contentDescription2',
            },
            {
                id: 2,
                serviceid: 7,
                description:'service_7_contentDescription3',
            },
            {
                id: 3,
                serviceid: 7,
                description:'service_7_contentDescription4',
            },
            {
                id: 4,
                serviceid: 7,
                description:'service_7_contentDescription1',
            },
        ],
    }
]

