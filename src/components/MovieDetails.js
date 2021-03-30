const MovieDetails = ({ movie, onClick }) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280"

    return (
        <div className="popular-movies">
            <img src={`${IMGPATH}${movie.poster_path}`} className="movie-img" alt="Movie" onClick={onClick}/>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieDetails
