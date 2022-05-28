import React from 'react';
import Header from '../component/layout/Header';
import Banner from '../component/layout/banners/Banner';
import requests from "../Request";
import PosterContainer from '../component/layout/PosterContainer';

function Home() {
  return (
    <div>
        <Header />
        <Banner api={requests.discoverMovies} />
        <PosterContainer title="Top Rated" api={requests.fetchTopRated} />
        <PosterContainer title="Latest Movies" api={requests.fetchTrendingSeries} />
        <PosterContainer title="Upcoming" api={requests.fetchUpcomingMovies} />
    </div>
  )
}

export default Home;