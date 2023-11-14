import { photoAPI } from "../../model/services/photoAPI";
import {Photo} from '../../model/types/PhotoSchema'
import PhotoItem from "../PhotoItem/PhotoItem";
import './PhotoGallery.scss'

const PhotoGallery = () => {
    const { data: photos, error, isLoading } = photoAPI.useFetchAllPhotosQuery('')

    return (
        <div className="PhotoGallery">
            {isLoading && <p>loading...</p>}
            {error && <p>something went wrong...</p>}
            {!isLoading && !error && photos && photos.map((photo: Photo) => (
                <PhotoItem photo={photo} key={photo.id}/>
            ))}
        </div>
    );
};

export default PhotoGallery;