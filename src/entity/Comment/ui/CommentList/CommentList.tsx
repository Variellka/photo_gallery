import { commentsAPI } from "../../model/services/commentsAPI";
import { Comment } from "../../model/types/comment";
import CommentItem from "../CommentItem/CommentItem";

interface CommentListProps {
    photoId: string
}

const CommentList = (props: CommentListProps) => {
    const {photoId} = props;
    const {data: comments, isLoading} =  commentsAPI.useFetchCommentsByIdQuery(photoId)

    return (
        <div>
            {isLoading && <p>loading...</p>}
            {!isLoading && (
                comments?.length ? comments.map(
                    (comment: Comment) => (<CommentItem comment={comment} key={comment.id}/>)
                ) : <p>no comments</p>
            )}
        </div>
    );
};

export default CommentList;