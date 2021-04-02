import { FaArrowAltCircleLeft } from 'react-icons/fa'


const MovieDetails = ({ movie, onClick, onAdd }) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280"

    return (
        <div>
            <FaArrowAltCircleLeft className="back-arrow" size="2.5em" onClick={onClick} />
            <h1 className="text-center">{movie.title}</h1>
            <div className="img-container">
                <img src={`${IMGPATH}${movie.poster_path}`} alt="Movie" onClick={onClick}/>
            </div>
            <h3 className="text-center">Rating: {movie.vote_average}/10 by {movie.vote_count} users</h3>
            <h1> Synopsis</h1>
            <p>{movie.overview}</p> 
            <button onClick={() => onAdd(movie)}>Add to Watchlist</button>
        </div>
    )
}

export default MovieDetails
