import { Photo } from '../../model/types/PhotoSchema';
import './PhotoItem.scss'

interface PhotoItemProps {
    photo: Photo
}

const PhotoItem = (props: PhotoItemProps) => {
    const {photo} = props

    return (
        <div className='PhotoItem' style={{backgroundImage: `url(${photo.image})`}} />
    );
};

export default PhotoItem;