import { User } from '../../../User';

export interface Comment {
    id: string,
    text: string,
    articleId: string,
    user: User
}
