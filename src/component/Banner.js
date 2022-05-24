import React, { useEffect, useState } from "react";
import instance from "../axiosBase";
import { BASE_IMG_URL } from '../Request';
import DetailModal from './DetailModal';

function Banner({ api }) {
    const [banner, setBanner] = useState([]);

    const fetchBanner = async () => {
        const response = await instance.get(api);
        const data = await response;
        const randomResult = Math.floor(
            Math.random() * data.data.results.length - 1
        );
        setBanner(data.data.results[randomResult]);
    };

    useEffect(() => {
        fetchBanner();
    }, []);

    return (
        <div className="banner" style={{backgroundImage: `url(${BASE_IMG_URL}${banner.backdrop_path})`}}>
            
            <div className="banner-overlay"></div>

            <div className="container banner-section">
                <div className="row banner-content">
                    <h1>{banner.name}</h1>

                    <div className="action-button">
                        
                        <DetailModal movieDetail={banner}/>

                        {/* <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaPlay color="white" onClick={handleShow} /> <span>Play</span>
                        </button>

                        <button type="button" className="btn btn-secondary">
                            <FaExclamation color="white" /> <span>More info</span>
                        </button> */}
                    </div>

                    <p className="movie-description mt-3">
                        {banner.overview}
                    </p>

                    {/* <DetailModal /> */}

                </div>
            </div>

        </div>

    );

}

export default Banner;
