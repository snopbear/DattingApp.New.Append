import { Photo } from '../photo/photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: string;
    gender: string;
    created: Date;
    lastActive: string;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
    roles?: string[];

}
