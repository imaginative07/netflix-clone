import React, { useState, useEffect } from "react";
import instance from "../axiosBase";
import "bootstrap/dist/js/bootstrap.min.js";
import { BASE_IMG_URL } from "../Request";
import PosterModal from "./modal/PosterModal";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


function PosterContainer({ api, title }) {

    const [movies, setMovies] = useState([]);    

    const fetchMovies = async () => {
        const response = await instance.get(api);
        const data = await response;
        setMovies(data.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="poster-container container-fluid mb-5">
            <div className="row px-5 mx-5">
                <h1 className="px-0">{title}</h1>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={6}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="poster-block">
                                <div className="movie-image">
                                    <img
                                        src={`${BASE_IMG_URL}${movie.backdrop_path}`}
                                        alt={movie.title}
                                    />
                                </div>

                                <div className="poster-details">
                                    <h3>{movie.title ?? movie.original_title ?? movie.name}</h3>

                                    <PosterModal
                                        movieDetail={movie}
                                    />
                                </div>

                                <div className="poster-overlay"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default PosterContainer;
