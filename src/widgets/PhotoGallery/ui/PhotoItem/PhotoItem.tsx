import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { CommentList } from '../../../../entity/Comment';
import { AddCommentForm } from '../../../../features/AddCommentForm';
import { selectCurrentUser } from '../../../../features/Authentication';
import { editCommentsAPI } from '../../model/services/editCommentsAPI';
import { Photo } from '../../model/types/PhotoSchema';
import './PhotoItem.scss';

interface PhotoItemProps {
    photo: Photo
}

const PhotoItem = (props: PhotoItemProps) => {
    const {photo} = props;
    const [addComment, {isLoading: addCommentLoading}] = editCommentsAPI.useAddCommentMutation()
    const [deleteComment, {}] = editCommentsAPI.useDeleteCommentMutation()
    const authUser = useSelector(selectCurrentUser)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmitComment = useCallback((text: string) => {
        if (text && authUser) {
            addComment({
                text: text,
                photoId: photo.id,
                user: authUser
            })
        }    
    }, [addComment, authUser, photo.id])

    const onDeleteComment = useCallback((id: string) => {
        deleteComment(id)
    }, [deleteComment])

    return (
        <>
            <div className='PhotoItem' style={{backgroundImage: `url(${photo.image})`}} onClick={openModal}/>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <div className='PhotoItem' style={{backgroundImage: `url(${photo.image})`}} />
                        <h1 className='title'>{photo.name}</h1>
                        <h2 className='comments'>comments:</h2>
                        <AddCommentForm 
                            onSubmitComment={onSubmitComment}
                            addCommentLoading={addCommentLoading}
                        />
                        <CommentList 
                            photoId={photo.id} 
                            authUserId={authUser!.id}
                            onDeleteComment={onDeleteComment}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default PhotoItem;