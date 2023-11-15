import Loader from "../../../../shared/ui/Loader/Loader";
import { editCommentsAPI } from "../../../../widgets/PhotoGallery";
import { Comment } from "../../model/types/comment";
import CommentItem from "../CommentItem/CommentItem";

interface CommentListProps {
    photoId: string
    authUserId: string
    onDeleteComment: (id: string) => void
}

const CommentList = (props: CommentListProps) => {
    const { photoId, authUserId, onDeleteComment } = props
    const {data: comments = [], isLoading} =  editCommentsAPI.useFetchCommentsByIdQuery(photoId)

    return (
        <div>
            {isLoading && <Loader/>}
            {!isLoading && (
                comments?.length ? comments.map(
                    (comment: Comment) => (
                        <CommentItem 
                            authUserId={authUserId} 
                            comment={comment} 
                            key={comment.id}
                            onDeleteComment={onDeleteComment}
                        />
                    )
                ) : <p>no comments</p>
            )}
        </div>
    );
};

export default CommentList;