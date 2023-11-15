import { editCommentsAPI } from "../../../../widgets/PhotoGallery";
import { Comment } from "../../model/types/comment";
import CommentItem from "../CommentItem/CommentItem";

interface CommentListProps {
    photoId: string
    authUserId: string
}

const CommentList = (props: CommentListProps) => {
    const { photoId, authUserId } = props
    const {data: comments = [], isLoading} =  editCommentsAPI.useFetchCommentsByIdQuery(photoId)

    return (
        <div>
            {isLoading && <p>loading...</p>}
            {!isLoading && (
                comments?.length ? comments.map(
                    (comment: Comment) => (<CommentItem authUserId={authUserId} comment={comment} key={comment.id}/>)
                ) : <p>no comments</p>
            )}
        </div>
    );
};

export default CommentList;