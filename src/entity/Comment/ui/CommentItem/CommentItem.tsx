import { Comment } from "../../model/types/comment";
import './CommentItem.scss';

interface CommentItemProps {
    comment: Comment
    authUserId: string
}

const CommentItem = (props: CommentItemProps) => {
    const {comment, authUserId} = props;

    return (
        <div className="CommentItem">
            <p className="username">{comment.user.username}:</p>
            <p className="text">{comment.text}</p>
            {authUserId === comment.user.id && <button className="delete">x</button>}
        </div>
    );
};

export default CommentItem;