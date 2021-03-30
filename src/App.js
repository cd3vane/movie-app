import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react'
import Movies from './components/Movies'
import SearchMovies from './components/SearchMovies'
import MovieDetails from './components/MovieDetails'
import Watchlist from './components/Watchlist'

function App() {
  const [popularMovies, setPopular] = useState([])
  const [browseMovies, setSearch] = useState([])
  const [watchlistMovies, setWatchlist] = useState([])
  const [movie, setMovie] = useState('')
  const [detailView, setView] = useState(false)

  const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=845024cb2f20a2bbaba2bd37eddadafc&language=en-US&page=1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };




  
  useEffect(() => {
    const getMovies = async (apiUrl) => {
      const moviesFromAPI = await fetchMovies(apiUrl)
      setPopular(moviesFromAPI)
    }

    getMovies(apiUrl)
  }, [])

  
  
  const searchMovies = async (title) => {
    const moviesFromAPI = await fetchMovies(SEARCHAPI + title.text)
    console.log(moviesFromAPI)
    setSearch(moviesFromAPI)
    }
    


  const fetchMovies = async (apiUrl) => {

    const res = await fetch(apiUrl, requestOptions)
    const data = await res.json()
    return data.results
}

  const toggleDetails = (movie) => {
    setMovie(movie)
    setView(!detailView)
  }

  return (
    <div className="container">
      <Tabs>
      <TabList>
        <Tab>Popular</Tab>
        <Tab>Browse</Tab>
        <Tab>Watchlist</Tab>
      </TabList>

      <TabPanel>
        { detailView ? <MovieDetails movie={movie} onClick={toggleDetails} /> : <Movies movies={popularMovies} onClick={toggleDetails}/> }
      </TabPanel>
      <TabPanel>
        <SearchMovies onSearch={searchMovies}/>
      </TabPanel>
      <TabPanel>
        <Watchlist />
      </TabPanel>
    </Tabs>
     
    </div>
  );
}

export default App;
