import Movie from './Movie'

const Watchlist = ( { movies, onClick }) => {
    return (
        <div className="popular-movies">
        <div className="row">
            {movies.map((movie) => 
            (<Movie key={movie.id} movie={movie} onClick={onClick}/>))}
        </div>
    </div>
    )
}

export default Watchlist
