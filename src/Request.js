const API_KEY = "8e4e2c9f82c6db8368312b2f633f650c";

export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

const requests = {
	fetchSearchQuery: `/search/multi?api_key=${API_KEY}&language=en-US&query=`,
	fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
	// fetchReleasedMoviesByOneMonth: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${ONEMONTHAGO}&sort_by=popularity.desc&language=en-US`,
    // Movies
	fetchTrendingMovies: `/trending/movies/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
	fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=en-US`,
	fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=en-US`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=en-US`,
	fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc&language=en-US`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=en-US`,
	discoverMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
    // Series
	discoverSeries: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
	fetchTrendingSeries: `/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US`,
	fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc&language=en-US`,
	fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=en-US`,
	fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US`,
	fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc&language=en-US`,
	fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=en-US`,
	fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=en-US`,
	fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc&language=en-US`,
	fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc&language=en-US`,
};

export default requests;