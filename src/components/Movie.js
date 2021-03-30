
const Movie = ({ movie, onClick }) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className="column" onClick={() => onClick(movie)}
        >
            <img src={`${IMGPATH}${movie.poster_path}`} alt="Movie"/>
            <h3>{movie.title}</h3>
            
        </div>
    )
}

export default Movie
