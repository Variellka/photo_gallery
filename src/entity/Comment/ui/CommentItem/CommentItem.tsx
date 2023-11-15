import { useState } from "react";
import { Comment } from "../../model/types/comment";
import './CommentItem.scss';
import Loader from "../../../../shared/ui/Loader/Loader";

interface CommentItemProps {
    comment: Comment
    authUserId: string
    onDeleteComment: (id: string) => void
}

const CommentItem = (props: CommentItemProps) => {
    const {comment, authUserId, onDeleteComment } = props;
    const [deletingComment, setDeletingComment] = useState(false)

    const onHandleClick = () => {
        onDeleteComment(comment.id!)
        setDeletingComment(true)
    }

    if (deletingComment) {
        return (
            <div className="CommentItem"><Loader/></div>
        )
    }

    return (
        <div className="CommentItem">
            <p className="username">{comment.user.username}:</p>
            <p className="text">{comment.text}</p>
            {authUserId === comment.user.id && 
                <button 
                    className="delete"
                    onClick={onHandleClick}
                >x
                </button>
            }
        </div>
    );
};

export default CommentItem;