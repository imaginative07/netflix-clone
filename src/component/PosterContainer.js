import React, { useState, useEffect } from "react";
import instance from "../axiosBase";
import { FaPlay, FaExclamation } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from "react-bootstrap";
import { BASE_IMG_URL } from "../Request";

// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

function PosterContainer({ api }) {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await instance.get(api);
        const data = await response;
        setMovies(data.data.results);
        // console.log(data.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, []);
    

    return (
        <div className="poster-container">
            <Swiper
                // install Swiper modules
                modules={[Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={6}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >

                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="poster-block">
                            
                            <div className="movie-image">
                                <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />
                            </div>

                            <div className="poster-details">
                                <Button type="button" className="btn btn-danger">
                                    <FaPlay color="white" />
                                </Button>

                                <Button type="button" className="btn btn-secondary">
                                    <FaExclamation color="white" />
                                </Button>
                                
                                <h3>{movie.title}</h3>
                            </div>

                        </div>
                        
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default PosterContainer;
