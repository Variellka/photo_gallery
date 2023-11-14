import { useState } from 'react';
import { Photo } from '../../model/types/PhotoSchema';
import './PhotoItem.scss'
import { CommentList } from '../../../../entity/Comment';

interface PhotoItemProps {
    photo: Photo
}

const PhotoItem = (props: PhotoItemProps) => {
    const {photo} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                        <CommentList photoId={photo.id}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default PhotoItem;