import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhotosComponent from './PhotosComponent';
import { fetchPosts } from './photoSlice';
import {Row} from "react-bootstrap"
const PhotoShow = () => {
    const {isloading, error, photos} = useSelector((state)=>state.photos)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            {isloading && <h3>Data Loading</h3> }
            {error && <p>{error}</p>}
            <Row xs={1} md={4} className="g-4 m-2">
        {photos &&
          photos.slice(0, 100).map((getData) => {
            return (
             <PhotosComponent
             key={getData.id}
             allPhotos ={getData}
             ></PhotosComponent>
            );
          })}
      </Row>
        </div>
    );
};

export default PhotoShow;