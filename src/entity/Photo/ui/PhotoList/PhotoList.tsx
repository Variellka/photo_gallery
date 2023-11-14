import { photoAPI } from "../../model/services/photoAPI";
import {Photo} from '../../model/types/PhotoSchema'
import PhotoItem from "../PhotoItem/PhotoItem";
import './PhotoList.scss'

const PhotoList = () => {
    const { data: photos } = photoAPI.useFetchAllPhotosQuery('')

    return (
        <div className="PhotoList">
            {photos && photos.map((photo: Photo) => (
                <PhotoItem photo={photo} key={photo.id}/>
            ))}
        </div>
    );
};

export default PhotoList;