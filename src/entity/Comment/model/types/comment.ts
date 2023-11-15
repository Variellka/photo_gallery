import { User } from '../../../User';

export interface Comment {
    id?: string,
    text: string,
    photoId: string,
    user: User
}
