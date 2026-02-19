export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: 'Erkek' | 'Kadın';
    photo: string;
    city: string;
    birthDate: string;
}

export const mockPatients: Patient[] = [
    {
        id: '1',
        name: 'Ahmet Yılmaz',
        age: 34,
        gender: 'Erkek',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
        city: 'İstanbul',
        birthDate: '1990-05-12',
    },
    {
        id: '2',
        name: 'Ayşe Demir',
        age: 28,
        gender: 'Kadın',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        city: 'Ankara',
        birthDate: '1996-08-23',
    },
    {
        id: '3',
        name: 'Mehmet Öz',
        age: 45,
        gender: 'Erkek',
        photo: 'https://randomuser.me/api/portraits/men/65.jpg',
        city: 'İzmir',
        birthDate: '1979-02-10',
    },
    {
        id: '4',
        name: 'Zeynep Kaya',
        age: 22,
        gender: 'Kadın',
        photo: 'https://randomuser.me/api/portraits/women/12.jpg',
        city: 'Bursa',
        birthDate: '2002-11-30',
    },
    {
        id: '5',
        name: 'Canan Can',
        age: 30,
        gender: 'Kadın',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        city: 'Antalya',
        birthDate: '1994-06-15',
    },
];
