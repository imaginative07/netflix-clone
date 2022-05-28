import React from 'react';
import Header from '../component/layout/Header';
import Banner from '../component/layout/banners/Banner';
import requests from "../service/Request";
import PosterContainer from '../component/layout/PosterContainer';

function Tvseries() {
  return (
    <div>
        <Header />
        <Banner api={requests.discoverSeries} />
        <PosterContainer title="Trending Now" api={requests.fetchTrendingSeries} />
        <PosterContainer title="Netflix Orginal" api={requests.fetchNetflixOriginals} />
        <PosterContainer title="Action & Adventure" api={requests.fetchActionAdventureSeries} />
        <PosterContainer title="Animation" api={requests.fetchAnimationSeries} />
        <PosterContainer title="Comedy" api={requests.fetchComedySeries} />
        <PosterContainer title="Crime" api={requests.fetchCrimeSeries} />
        <PosterContainer title="Documentary" api={requests.fetchDocumentarySeries} />
        <PosterContainer title="Family" api={requests.fetchFamilySeries} />
        <PosterContainer title="Kids" api={requests.fetchKidsSeries} />
    </div>
  )
}

export default Tvseries;