import React from 'react';
import Header from '../component/Header';
import Banner from '../component/Banner';
import requests from "../Request";
import PosterContainer from '../component/PosterContainer';

function Home() {
  return (
    <div>
        <Header />
        <Banner api={requests.fetchNetflixOriginals} />
        <PosterContainer api={requests.fetchTrendingMovies} />
    </div>
  )
}

export default Home;