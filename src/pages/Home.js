import React from 'react';
import Header from '../component/layout/Header';
import Banner from '../component/layout/banners/Banner';
import requests from "../Request";
import PosterContainer from '../component/layout/PosterContainer';

function Home() {
  return (
    <div>
        <Header />
        <Banner api={requests.fetchNetflixOriginals} />
        <PosterContainer title="Trending Now" api={requests.fetchTrendingMovies} />
        <PosterContainer title="Top Rated" api={requests.fetchTopRated} />
        <PosterContainer title="Upcoming" api={requests.fetchUpcomingMovies} />
        <PosterContainer title="Action" api={requests.fetchActionMovies} />
        <PosterContainer title="Adventure" api={requests.fetchAdventureMovies} />
        <PosterContainer title="Horror" api={requests.fetchHorrorMovies} />
        <PosterContainer title="Comedy" api={requests.fetchComedyMovies} />
        <PosterContainer title="Animation" api={requests.fetchAnimationMovies} />
        <PosterContainer title="Romance" api={requests.fetchRomanceMovies} />
    </div>
  )
}

export default Home;