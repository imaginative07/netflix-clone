import React, { useEffect, useState } from "react";
import instance from "../../../service/axiosBase";
import { BASE_IMG_URL } from '../../../service/Request';
import DetailModal from '../../modal/DetailModal';

function Banner({ api }) {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetchBanner = async () => {
            const response = await instance.get(api);
            const data = await response;
            const randomResult = Math.floor(
                Math.random() * data.data.results.length - 1
            );
            setBanner(data.data.results[randomResult]);
        };

        fetchBanner();
    }, [api]);

    const overview  = banner.overview;

    return (
        <div className="banner" style={{backgroundImage: `url(${BASE_IMG_URL}${banner.backdrop_path})`}}>
            
            <div className="banner-overlay"></div>

            <div className="container-fluid banner-section">

                <div className="row banner-content px-5 mx-5">
                    
                    <h1>{banner.name ?? banner.original_title}</h1>

                    <div className="action-button">
                        <DetailModal movieDetail={banner}/>
                    </div>

                    <p className="movie-description mt-3">
                        
                        {overview}
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Banner;
