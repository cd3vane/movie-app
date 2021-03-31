import WatchlistButton from './WatchlistButton'

const Movie = ({ movie, onClick, onAdd }) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className="column">
            <div className="content">
            <img src={`${IMGPATH}${movie.poster_path}`} alt="No image in database" onClick={() => onClick(movie)} />
            { movie.poster_path != null ? <WatchlistButton text="+" onClick={() => onAdd(movie)}/> : ''}
            </div>
            <h3>{movie.title}</h3>
           
            
        </div>
    )
}

export default Movie
