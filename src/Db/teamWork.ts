

export interface TeamWorkMembers {
    id: number;
    teamName: string;
    info: string;
    image: string;     
    phone: string;
}
export const teamWork : TeamWorkMembers[]  = [
    {
        id: 1,
        teamName: 'team_1_name', // These should be keys in the translation file
        info: 'team_1_info',
        image: 'Ahmad.jpg',
        phone: 'team_1_phone',
    },
    {
        id: 2,
        teamName: 'team_2_name',
        info: 'team_2_info',
        image: 'Mosa.jpg',
        phone: 'team_2_phone',
    },
    {
        id: 3,
        teamName: 'team_3_name',
        info: 'team_3_info',
        image: 'Qamar.jpg',
        phone: 'team_3_phone',
    },
    {
        id: 4,
        teamName: 'team_4_name',
        info: 'team_4_info',
        image: 'Mike.jpg',
        phone: 'team_4_phone'
    },
    {
        id: 5,
        teamName: 'team_5_name',
        info: 'team_5_info',
        image: 'Naji.jpg',
        phone: 'team_5_phone'
    },
]