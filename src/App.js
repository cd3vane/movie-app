import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react'

import Pagination from '@material-ui/lab/Pagination';

import Header from './components/Header'
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
  const [page, setPage] = useState(1);

  const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=845024cb2f20a2bbaba2bd37eddadafc&language=en-US&page=";
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
    getMovies(apiUrl + 1)
  }, [])

  
  
  const searchMovies = async (title) => {
    const moviesFromAPI = await fetchMovies(SEARCHAPI + title.text)
    console.log(moviesFromAPI)
    setSearch(moviesFromAPI)
    }


  const pageSearch = async (page) => {
    const moviesFromAPI = await fetchMovies(apiUrl + page)
    setPopular(moviesFromAPI)
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    pageSearch(newPage)
  }

  const addToWatchlist = (movie) => {
    const newMovie = {...movie}
    setWatchlist([...watchlistMovies, newMovie])
  }

  return (
    <Router>
    <div className="container">
     <Header />

      <Route path="/" exact render={(props) => (
        <>
        { detailView ? <MovieDetails movie={movie} onClick={toggleDetails} onAdd={addToWatchlist}/> : <Movies movies={popularMovies} onClick={toggleDetails} onAdd={addToWatchlist} /> }
        { !detailView ? <Pagination defaultPage={1} count={500} page={page} onChange={handleChangePage}/> : "" }
        </>
      )}></Route>
      
      <Route path="/browse"  exact render={(props) => (
        <>
        <SearchMovies onSearch={searchMovies}/>
        { detailView ? <MovieDetails movie={movie} onClick={toggleDetails} onAdd={addToWatchlist}/> : <Movies movies={browseMovies} onClick={toggleDetails} onAdd={addToWatchlist}/> }
        </>
      )}></Route>
      
      <Route path="/watchlist" exact render={(props) => (
        <>
        { watchlistMovies.length > 0 ? <Watchlist movies={watchlistMovies} onClick={toggleDetails}/> : 'No movie in your watchlist yet'}
        </>
      )}></Route>
      
    </div>
    </Router>
  )
}

export default App;
