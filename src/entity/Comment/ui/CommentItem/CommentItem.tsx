import { Comment } from "../../model/types/comment";
import './CommentItem.scss'

interface CommentItemProps {
    comment: Comment
}

const CommentItem = (props: CommentItemProps) => {
    const {comment} = props;

    return (
        <div className="CommentItem">
            <p className="username">{comment.user.username}:</p>
            <p className="text">{comment.text}</p>
        </div>
    );
};

export default CommentItem;